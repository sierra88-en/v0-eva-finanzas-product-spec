import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe/server"
import { headers } from "next/headers"
import type Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    console.error("[v0] Missing stripe-signature header")
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  if (!webhookSecret) {
    console.error("[v0] STRIPE_WEBHOOK_SECRET not configured")
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const error = err as Error
    console.error("[v0] Webhook signature verification failed:", error.message)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        console.log("[v0] Checkout session completed:", session.id)
        console.log("[v0] Customer email:", session.customer_email)
        console.log("[v0] Plan:", session.metadata?.plan)
        // TODO: Save subscription to database
        // TODO: Send welcome email
        break

      case "customer.subscription.created":
        const subscription = event.data.object as Stripe.Subscription
        console.log("[v0] Subscription created:", subscription.id)
        console.log("[v0] Plan:", subscription.metadata?.plan)
        // TODO: Update user subscription status in database
        break

      case "customer.subscription.updated":
        const updatedSubscription = event.data.object as Stripe.Subscription
        console.log("[v0] Subscription updated:", updatedSubscription.id)
        console.log("[v0] Status:", updatedSubscription.status)
        // TODO: Update user subscription status in database
        break

      case "customer.subscription.deleted":
        const deletedSubscription = event.data.object as Stripe.Subscription
        console.log("[v0] Subscription deleted:", deletedSubscription.id)
        // TODO: Cancel user subscription in database
        break

      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice
        console.log("[v0] Invoice payment succeeded:", invoice.id)
        // TODO: Send receipt email
        break

      case "invoice.payment_failed":
        const failedInvoice = event.data.object as Stripe.Invoice
        console.log("[v0] Invoice payment failed:", failedInvoice.id)
        // TODO: Send payment failed email
        break

      default:
        console.log("[v0] Unhandled event type:", event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[v0] Error processing webhook:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
