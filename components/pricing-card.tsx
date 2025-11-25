"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/stripe"
import { useState } from "react"
import type { PlanType } from "@/lib/stripe/products"

interface PricingCardProps {
  plan: PlanType
  name: string
  description: string
  price: number
  currency: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaVariant?: "default" | "outline"
}

export function PricingCard({
  plan,
  name,
  description,
  price,
  currency,
  features,
  popular,
  ctaText = "Comenzar gratis",
  ctaVariant = "outline",
}: PricingCardProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const { url } = await createCheckoutSession(plan)
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      alert("Error al procesar el pago. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className={`p-8 ${popular ? "relative border-2 border-emerald-600 shadow-xl" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
          Más Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="mt-6">
        <span className="text-5xl font-bold text-slate-900">${price.toLocaleString("en-US")}</span>
        <span className="text-slate-600"> USD/mes</span>
      </div>
      <ul className="mt-8 space-y-3" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={ctaVariant} onClick={handleCheckout} disabled={loading}>
        {loading ? "Procesando..." : ctaText}
      </Button>
    </Card>
  )
}
