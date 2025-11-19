import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Users, Shield, BarChart3, Zap, Target, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-w-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              ¿Tu empresa crea o destruye <span className="text-emerald-600">valor real</span>?
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              EVA Finanzas calcula automáticamente tu EVA (Economic Value Added), transforma tu contabilidad en métricas estratégicas y te dice si estás generando riqueza real.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                Comenzar Gratis <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Sin tarjeta de crédito • 14 días de prueba • Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              El problema que toda PYME enfrenta
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
              Tienes utilidades contables, pero <strong className="text-white">¿realmente generas valor?</strong> La contabilidad tradicional no te dice si tu negocio está creando riqueza después de considerar el costo del capital.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Card className="bg-slate-800 p-6 text-white border-slate-700">
                <div className="text-4xl font-bold text-red-400">87%</div>
                <p className="mt-2 text-sm text-slate-300">de las PYMEs no conocen su EVA real</p>
              </Card>
              <Card className="bg-slate-800 p-6 text-white border-slate-700">
                <div className="text-4xl font-bold text-red-400">$0</div>
                <p className="mt-2 text-sm text-slate-300">valor creado si tu rentabilidad {'<'} WACC</p>
              </Card>
              <Card className="bg-slate-800 p-6 text-white border-slate-700">
                <div className="text-4xl font-bold text-red-400">0</div>
                <p className="mt-2 text-sm text-slate-300">herramientas accesibles para calcular EVA</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              La solución: EVA automatizado y profesional
            </h2>
            <p className="mt-4 text-pretty text-lg text-slate-600">
              EVA Finanzas hace el trabajo pesado por ti: ajustes contables, cálculo de WACC, proyecciones y análisis estratégico.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Cálculo Automático</h3>
              <p className="mt-2 text-slate-600">
                Transforma tu contabilidad tradicional en EVA real con ajustes automáticos de I+D, leasing, activos improductivos y más.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">WACC Profesional</h3>
              <p className="mt-2 text-slate-600">
                Calcula tu Costo Promedio Ponderado de Capital con betas comparables, riesgo país y fórmula de Hamada.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Escenarios Estratégicos</h3>
              <p className="mt-2 text-slate-600">
                Modela "qué pasaría si..." con cambios en deuda, inversiones, costos operativos y más.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">EVA por Unidades</h3>
              <p className="mt-2 text-slate-600">
                Desagrega tu EVA por departamento, sucursal o proyecto. Identifica dónde creas y dónde destruyes valor.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Compensaciones EVA</h3>
              <p className="mt-2 text-slate-600">
                Liga bonos gerenciales a la creación de valor real con Bonus Bank automático.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                <BarChart3 className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Dashboard Ejecutivo</h3>
              <p className="mt-2 text-slate-600">
                Visualiza tu EVA histórico, drivers de valor, NOPAT, capital invertido y tendencias en tiempo real.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-emerald-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-pretty text-lg text-slate-600">
              En 3 simples pasos, tendrás tu EVA calculado y métricas estratégicas listas.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Conecta tu contabilidad</h3>
              <p className="mt-2 text-slate-600">
                Integra con QuickBooks, Konvex, Chift, Facturama o importa tu balanza y estado de resultados.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Ajustes automáticos</h3>
              <p className="mt-2 text-slate-600">
                EVA Finanzas transforma tus datos contables en métricas económicas reales con ajustes profesionales.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Obtén tu EVA</h3>
              <p className="mt-2 text-slate-600">
                Visualiza tu EVA, WACC, capital invertido, escenarios y decisiones estratégicas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Planes diseñados para tu empresa
            </h2>
            <p className="mt-4 text-pretty text-lg text-slate-600">
              Desde startups hasta corporativos, tenemos el plan perfecto para ti.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Base Plan */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900">Base</h3>
              <p className="mt-2 text-slate-600">Para empezar a medir tu creación de valor</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-slate-900">$16</span>
                <span className="text-slate-600">/mes</span>
              </div>
              <ul className="mt-8 space-y-3">
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
              </ul>
              <Button className="mt-8 w-full" variant="outline">
                Comenzar gratis
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="relative p-8 border-2 border-emerald-600">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Pro</h3>
              <p className="mt-2 text-slate-600">Para empresas que quieren control total</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-slate-900">$49</span>
                <span className="text-slate-600">/mes</span>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Todo en Base, más:</span>
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
              </ul>
              <Button className="mt-8 w-full">
                Comenzar ahora
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
              <p className="mt-2 text-slate-600">Para corporativos y grupos empresariales</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-slate-900">$119</span>
                <span className="text-slate-600">/mes</span>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Todo en Pro, más:</span>
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
                  <span className="text-slate-700">Soporte prioritario</span>
                </li>
              </ul>
              <Button className="mt-8 w-full" variant="outline">
                Contactar ventas
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Empresas que ya crean valor real
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <p className="text-slate-700 italic">
                "Antes teníamos utilidades en papel, pero no sabíamos si realmente generábamos valor. EVA Finanzas nos abrió los ojos."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-200" />
                <div>
                  <div className="font-semibold text-slate-900">María González</div>
                  <div className="text-sm text-slate-600">CFO, IndustriaMax</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <p className="text-slate-700 italic">
                "El módulo de compensaciones cambió nuestra cultura. Ahora todos piensan en crear valor, no solo en ventas."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-200" />
                <div>
                  <div className="font-semibold text-slate-900">Carlos Ramírez</div>
                  <div className="text-sm text-slate-600">Director General, TechSolutions</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <p className="text-slate-700 italic">
                "Identificamos que 2 de nuestras 5 sucursales destruían valor. Tomamos decisiones estratégicas que salvaron la empresa."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-200" />
                <div>
                  <div className="font-semibold text-slate-900">Ana Martínez</div>
                  <div className="text-sm text-slate-600">Socia, RetailGroup</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-emerald-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Descubre si tu empresa crea valor real
            </h2>
            <p className="mt-4 text-pretty text-lg text-emerald-100">
              Únete a cientos de empresas que ya toman decisiones basadas en EVA, no en intuición.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Comenzar Gratis <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Agendar Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-emerald-100">
              14 días gratis • No requiere tarjeta • Soporte en español
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-white">EVA Finanzas</h3>
              <p className="mt-2 text-sm text-slate-400">
                La plataforma de gestión basada en valor económico agregado para PYMEs de Latinoamérica.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Producto</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white">Características</Link></li>
                <li><Link href="#" className="hover:text-white">Precios</Link></li>
                <li><Link href="#" className="hover:text-white">Integraciones</Link></li>
                <li><Link href="#" className="hover:text-white">Casos de éxito</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Recursos</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Guía de EVA</Link></li>
                <li><Link href="#" className="hover:text-white">API Docs</Link></li>
                <li><Link href="#" className="hover:text-white">Soporte</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Empresa</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white">Acerca de</Link></li>
                <li><Link href="#" className="hover:text-white">Contacto</Link></li>
                <li><Link href="#" className="hover:text-white">Términos</Link></li>
                <li><Link href="#" className="hover:text-white">Privacidad</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            © 2025 EVA Finanzas. Todos los derechos reservados. | www.evafinanzas.com
          </div>
        </div>
      </footer>
    </div>
  )
}
