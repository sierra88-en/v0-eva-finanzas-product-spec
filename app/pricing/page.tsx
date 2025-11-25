import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { PricingCard } from "@/components/pricing-card"
import { STRIPE_PRODUCTS } from "@/lib/stripe/products"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios - EVA Finanzas",
  description:
    "Planes desde $16 USD/mes. Base para startups, Pro para empresas en crecimiento, Enterprise para corporativos. 14 días gratis.",
  alternates: {
    canonical: "https://www.evafinanzas.com/pricing",
  },
  openGraph: {
    title: "Precios de EVA Finanzas - Planes desde $16 USD/mes",
    description: "14 días gratis. Sin tarjeta de crédito. Planes Base, Pro y Enterprise.",
    url: "https://www.evafinanzas.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-w-0">
      <Navbar />

      <main id="main-content">
        <section className="py-20" aria-labelledby="pricing-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1
                id="pricing-heading"
                className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
              >
                Planes diseñados para <span className="text-emerald-600">tu empresa</span>
              </h1>
              <p className="mt-4 text-pretty text-lg text-slate-600">
                Desde startups hasta corporativos. Sin permanencia, cancela cuando quieras.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Precios en dólares americanos (USD). 14 días de prueba gratis.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <PricingCard
                plan="base"
                name={STRIPE_PRODUCTS.base.name}
                description={STRIPE_PRODUCTS.base.description}
                price={STRIPE_PRODUCTS.base.price}
                currency={STRIPE_PRODUCTS.base.currency}
                features={STRIPE_PRODUCTS.base.features}
                ctaText="Comenzar gratis"
                ctaVariant="outline"
              />

              <PricingCard
                plan="pro"
                name={STRIPE_PRODUCTS.pro.name}
                description={STRIPE_PRODUCTS.pro.description}
                price={STRIPE_PRODUCTS.pro.price}
                currency={STRIPE_PRODUCTS.pro.currency}
                features={STRIPE_PRODUCTS.pro.features}
                popular
                ctaText="Comenzar ahora"
                ctaVariant="default"
              />

              <PricingCard
                plan="enterprise"
                name={STRIPE_PRODUCTS.enterprise.name}
                description={STRIPE_PRODUCTS.enterprise.description}
                price={STRIPE_PRODUCTS.enterprise.price}
                currency={STRIPE_PRODUCTS.enterprise.currency}
                features={STRIPE_PRODUCTS.enterprise.features}
                ctaText="Comenzar ahora"
                ctaVariant="outline"
              />
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
              <div className="mx-auto mt-10 max-w-3xl space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Puedo cambiar de plan en cualquier momento?</h3>
                  <p className="mt-2 text-slate-600">
                    Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se reflejan inmediatamente y se
                    prorratean en tu siguiente factura.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Qué incluye la prueba gratuita?</h3>
                  <p className="mt-2 text-slate-600">
                    14 días completos del plan que elijas sin necesidad de tarjeta de crédito. Acceso total a todas las
                    funcionalidades.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Ofrecen descuentos por pago anual?</h3>
                  <p className="mt-2 text-slate-600">
                    Sí, obtén 2 meses gratis al pagar anualmente. Contacta a ventas para planes Enterprise
                    personalizados.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Mis datos están seguros?</h3>
                  <p className="mt-2 text-slate-600">
                    Absolutamente. Usamos encriptación AES-256, backups diarios automáticos y cumplimos con estándares
                    internacionales de seguridad.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
