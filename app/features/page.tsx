import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, TrendingUp, Target, Building2, Users, BarChart3, CheckCircle, ArrowRight, Smartphone, Cloud, Lock, Workflow } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Características - EVA Finanzas',
  description: 'Descubre todas las funcionalidades de EVA Finanzas: cálculo automático de EVA, WACC profesional, escenarios estratégicos, compensaciones y más.',
}

export default function FeaturesPage() {
  return (
    <div className="min-w-0">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Todo lo que necesitas para gestionar el <span className="text-emerald-600">valor real</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-slate-600">
              EVA Finanzas integra módulos profesionales de análisis financiero, ajustes contables automáticos y herramientas de decisión estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">Motor Contable Automático</h2>
                <p className="mt-4 text-lg text-slate-600">
                  El AC Engine transforma tu contabilidad tradicional en métricas económicas reales aplicando ajustes profesionales de forma automática.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Capitalización automática de I+D y marketing estratégico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Ajustes de leasing operativo según IFRS 16</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Identificación de activos improductivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Ajustes fiscales y provisiones contables</span>
                  </li>
                </ul>
              </div>
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-white">
                <div className="text-sm font-semibold text-emerald-600">NOPAT AJUSTADO</div>
                <div className="mt-2 text-4xl font-bold text-slate-900">$2.4M MXN</div>
                <div className="mt-1 text-sm text-slate-600">+18% vs utilidad contable</div>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Utilidad Operativa</span>
                    <span className="font-semibold text-slate-900">$2.0M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">+ Capitalización I+D</span>
                    <span className="font-semibold text-emerald-600">+$300K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">+ Ajuste Leasing</span>
                    <span className="font-semibold text-emerald-600">+$150K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">- Impuestos Efectivos</span>
                    <span className="font-semibold text-red-600">-$50K</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Feature 2 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white lg:order-1">
                <div className="text-sm font-semibold text-blue-600">WACC CALCULADO</div>
                <div className="mt-2 text-4xl font-bold text-slate-900">12.4%</div>
                <div className="mt-1 text-sm text-slate-600">Costo de capital ajustado por riesgo</div>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Costo de Capital Propio (Ke)</span>
                    <span className="font-semibold text-slate-900">15.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Costo de Deuda (Kd)</span>
                    <span className="font-semibold text-slate-900">8.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Beta Apalancado</span>
                    <span className="font-semibold text-slate-900">1.28</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Estructura D/E</span>
                    <span className="font-semibold text-slate-900">40/60</span>
                  </div>
                </div>
              </Card>
              <div className="lg:order-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">WACC as a Service (WaaS)</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Cálculo profesional del Costo Promedio Ponderado de Capital con metodología de valuación corporativa.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Beta desapalancado de comparables del sector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Prima de riesgo país actualizada (México/LATAM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Reapalancamiento con fórmula de Hamada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Cálculo automático según estructura de capital</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">Análisis de Escenarios</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Modela decisiones estratégicas y visualiza su impacto en tu EVA antes de ejecutarlas.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Simulación de cambios en estructura de capital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Proyecciones de nuevas inversiones y CAPEX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Impacto de mejoras operativas en margen NOPAT</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Análisis de sensibilidad de variables clave</span>
                  </li>
                </ul>
              </div>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-white">
                <div className="text-sm font-semibold text-purple-600">ESCENARIO: NUEVA DEUDA</div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-600">EVA Actual</div>
                    <div className="mt-1 text-2xl font-bold text-slate-900">$480K</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">EVA Proyectado</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-600">$620K</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  Aumento de deuda de $500K reduce WACC de 12.4% a 11.1%, creando $140K adicionales de valor.
                </div>
                <Button className="mt-6 w-full" variant="outline">
                  Ver Análisis Completo
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section id="integrations" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Más características profesionales</h2>
            <p className="mt-4 text-lg text-slate-600">
              Todo lo que necesitas para tomar decisiones basadas en valor
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Building2 className="h-8 w-8 text-orange-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">EVA por Unidades</h3>
              <p className="mt-2 text-slate-600">
                Desagrega tu EVA por departamento, sucursal o proyecto para identificar dónde creas valor.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="h-8 w-8 text-pink-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Compensaciones EVA</h3>
              <p className="mt-2 text-slate-600">
                Liga bonos gerenciales a creación de valor con Bonus Bank automático.
              </p>
            </Card>

            <Card className="p-6">
              <BarChart3 className="h-8 w-8 text-cyan-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Dashboard Ejecutivo</h3>
              <p className="mt-2 text-slate-600">
                Visualiza tendencias, drivers de valor y métricas clave en tiempo real.
              </p>
            </Card>

            <Card className="p-6">
              <Smartphone className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Acceso Móvil</h3>
              <p className="mt-2 text-slate-600">
                Consulta tu EVA desde cualquier dispositivo, en cualquier momento.
              </p>
            </Card>

            <Card className="p-6">
              <Cloud className="h-8 w-8 text-sky-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Integraciones API</h3>
              <p className="mt-2 text-slate-600">
                Conecta con QuickBooks, Konvex, Chift, Facturama y más sistemas contables.
              </p>
            </Card>

            <Card className="p-6">
              <Lock className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Seguridad Empresarial</h3>
              <p className="mt-2 text-slate-600">
                Encriptación de datos, backups automáticos y control de permisos por usuario.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Comienza a medir tu creación de valor hoy
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              14 días gratis, sin tarjeta de crédito, soporte en español
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/demo">
                  Comenzar Gratis <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700" asChild>
                <Link href="/pricing">Ver Precios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
