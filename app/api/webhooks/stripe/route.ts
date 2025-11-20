import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe/server"
import { headers } from "next/headers"
import type Stripe from "stripe" // Import Stripe to declare the variable

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("[v0] Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session
      console.log("[v0] Checkout session completed:", session.id)
      // TODO: Fulfill the purchase - save to database
      break

    case "customer.subscription.created":
      const subscription = event.data.object as Stripe.Subscription
      console.log("[v0] Subscription created:", subscription.id)
      // TODO: Update user subscription status
      break

    case "customer.subscription.updated":
      const updatedSubscription = event.data.object as Stripe.Subscription
      console.log("[v0] Subscription updated:", updatedSubscription.id)
      // TODO: Update user subscription status
      break

    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object as Stripe.Subscription
      console.log("[v0] Subscription deleted:", deletedSubscription.id)
      // TODO: Cancel user subscription
      break

    default:
      console.log("[v0] Unhandled event type:", event.type)
  }

  return NextResponse.json({ received: true })
}
