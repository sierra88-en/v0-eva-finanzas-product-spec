import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe/server"
import { STRIPE_PRODUCTS, type PlanType } from "@/lib/stripe/products"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { plan, customerEmail } = body as {
      plan: PlanType
      customerEmail?: string
    }

    console.log("[v0] Creating checkout session for plan:", plan)

    if (!plan || !STRIPE_PRODUCTS[plan]) {
      console.error("[v0] Invalid plan:", plan)
      return NextResponse.json({ error: "Plan inválido" }, { status: 400 })
    }

    const product = STRIPE_PRODUCTS[plan]
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://www.evafinanzas.com"

    console.log("[v0] Using priceId:", product.priceId)

    // Create Checkout Session using priceId
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: product.priceId, // Using priceId directly
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      customer_email: customerEmail,
      metadata: {
        plan,
      },
      subscription_data: {
        metadata: {
          plan,
        },
        trial_period_days: 14, // 14 días gratis
      },
      allow_promotion_codes: true,
      billing_address_collection: "required",
    })

    console.log("[v0] Checkout session created:", session.id)
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: "Error al crear la sesión de pago", details: errorMessage }, { status: 500 })
  }
}
