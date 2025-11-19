import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Target, Users, TrendingUp, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acerca de EVA Finanzas',
  description: 'Conoce la historia y misión de EVA Finanzas: democratizar el análisis de valor económico agregado para PYMEs de Latinoamérica.',
}

export default function AboutPage() {
  return (
    <div className="min-w-0">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Nuestra misión: democratizar la <span className="text-emerald-600">creación de valor</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-slate-600">
              EVA Finanzas nace de la convicción de que toda empresa, sin importar su tamaño, merece tomar decisiones basadas en valor económico real.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Visión</h3>
              <p className="mt-2 text-sm text-slate-600">
                Ser la plataforma #1 de gestión basada en EVA en Latinoamérica
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Equipo</h3>
              <p className="mt-2 text-sm text-slate-600">
                Expertos en finanzas corporativas, tecnología y product design
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Crecimiento</h3>
              <p className="mt-2 text-sm text-slate-600">
                +150 empresas confían en nosotros para medir su creación de valor
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Compromiso</h3>
              <p className="mt-2 text-sm text-slate-600">
                Soporte en español y metodología adaptada a Latinoamérica
              </p>
            </Card>
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-slate-900">Nuestra historia</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p className="text-lg leading-relaxed">
                EVA Finanzas surge de la frustración de ver cómo cientos de PYMEs en Latinoamérica toman decisiones estratégicas basándose únicamente en utilidades contables, sin entender si realmente están generando valor económico.
              </p>
              <p className="text-lg leading-relaxed">
                El EVA (Economic Value Added) es una métrica poderosa que las grandes corporaciones utilizan desde hace décadas, pero que ha sido inaccesible para empresas medianas por su complejidad técnica y costo.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestro objetivo es simple: automatizar completamente el cálculo del EVA y hacerlo accesible para cualquier empresa que quiera tomar mejores decisiones financieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
