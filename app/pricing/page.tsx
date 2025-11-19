import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios - EVA Finanzas',
  description: 'Planes desde $16/mes. Base para startups, Pro para empresas en crecimiento, Enterprise para corporativos. 14 días gratis.',
  alternates: {
    canonical: 'https://www.evafinanzas.com/pricing',
  },
  openGraph: {
    title: 'Precios de EVA Finanzas - Planes desde $16/mes',
    description: '14 días gratis. Sin tarjeta de crédito. Planes Base, Pro y Enterprise.',
    url: 'https://www.evafinanzas.com/pricing',
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
              <h1 id="pricing-heading" className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Planes diseñados para <span className="text-emerald-600">tu empresa</span>
              </h1>
              <p className="mt-4 text-pretty text-lg text-slate-600">
                Desde startups hasta corporativos. Sin permanencia, cancela cuando quieras.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {/* Base Plan */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900">Base</h2>
                <p className="mt-2 text-slate-600">Para empezar a medir tu creación de valor</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">$16</span>
                  <span className="text-slate-600">/mes</span>
                </div>
                <ul className="mt-8 space-y-3" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Cálculo EVA básico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Dashboard principal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">1 empresa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Importación manual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">WACC básico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Histórico de 12 meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Soporte por email</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline" asChild>
                  <Link href="/demo">Comenzar gratis</Link>
                </Button>
              </Card>

              {/* Pro Plan */}
              <Card className="relative p-8 border-2 border-emerald-600 shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
                  Más Popular
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Pro</h2>
                <p className="mt-2 text-slate-600">Para empresas que quieren control total</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">$49</span>
                  <span className="text-slate-600">/mes</span>
                </div>
                <ul className="mt-8 space-y-3" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold">Todo en Base, más:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Motor contable completo (AC Engine)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">WACC profesional (WaaS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Análisis de escenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Integraciones API</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Hasta 3 empresas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Histórico ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Exportación de reportes</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" asChild>
                  <Link href="/demo">Comenzar ahora</Link>
                </Button>
              </Card>

              {/* Enterprise Plan */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900">Enterprise</h2>
                <p className="mt-2 text-slate-600">Para corporativos y grupos empresariales</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">$119</span>
                  <span className="text-slate-600">/mes</span>
                </div>
                <ul className="mt-8 space-y-3" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold">Todo en Pro, más:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">EVA por unidades de negocio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Módulo de compensaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Bonus Bank automático</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Multiusuario ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Empresas ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Onboarding personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Soporte prioritario 24/7</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline" asChild>
                  <Link href="/contact">Contactar ventas</Link>
                </Button>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
              <div className="mx-auto mt-10 max-w-3xl space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Puedo cambiar de plan en cualquier momento?</h3>
                  <p className="mt-2 text-slate-600">
                    Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se reflejan inmediatamente y se prorratean en tu siguiente factura.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Qué incluye la prueba gratuita?</h3>
                  <p className="mt-2 text-slate-600">
                    14 días completos del plan Pro sin necesidad de tarjeta de crédito. Acceso total a todas las funcionalidades profesionales.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Ofrecen descuentos por pago anual?</h3>
                  <p className="mt-2 text-slate-600">
                    Sí, obtén 2 meses gratis al pagar anualmente. Contacta a ventas para planes Enterprise personalizados.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">¿Mis datos están seguros?</h3>
                  <p className="mt-2 text-slate-600">
                    Absolutamente. Usamos encriptación AES-256, backups diarios automáticos y cumplimos con estándares internacionales de seguridad.
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
