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

    if (!plan || !STRIPE_PRODUCTS[plan]) {
      return NextResponse.json({ error: "Plan inválido" }, { status: 400 })
    }

    const product = STRIPE_PRODUCTS[plan]
    const origin = req.headers.get("origin") || "https://www.evafinanzas.com"

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product: product.id,
            recurring: {
              interval: product.interval,
            },
            unit_amount: product.price * 100, // Convert to cents
          },
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

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    return NextResponse.json({ error: "Error al crear la sesión de pago" }, { status: 500 })
  }
}
