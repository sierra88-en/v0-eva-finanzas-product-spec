"use server"

import { stripe } from "@/lib/stripe/server"
import { STRIPE_PRODUCTS, type PlanType } from "@/lib/stripe/products"

export async function createCheckoutSession(plan: PlanType, customerEmail?: string) {
  try {
    if (!STRIPE_PRODUCTS[plan]) {
      throw new Error("Plan inválido")
    }

    const product = STRIPE_PRODUCTS[plan]
    const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evafinanzas.com"

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
            unit_amount: product.price * 100,
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
        trial_period_days: 14,
      },
      allow_promotion_codes: true,
      billing_address_collection: "required",
    })

    return { url: session.url, sessionId: session.id }
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    throw new Error("Error al crear la sesión de pago")
  }
}

export async function getSubscriptionStatus(customerId: string) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    })

    if (subscriptions.data.length === 0) {
      return null
    }

    return subscriptions.data[0]
  } catch (error) {
    console.error("[v0] Error getting subscription status:", error)
    return null
  }
}
