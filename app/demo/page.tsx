'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Demo request submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-w-0">
      <Navbar />

      <main id="main-content">
        <section className="py-20" aria-labelledby="demo-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 id="demo-heading" className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Comienza a crear <span className="text-emerald-600">valor real</span> hoy
                </h1>
                <p className="mt-6 text-pretty text-lg text-slate-600">
                  Accede a EVA Finanzas gratis por 14 días. Sin tarjeta de crédito, sin compromiso.
                </p>

                <div className="mt-8 space-y-4" role="list">
                  <div className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-slate-900">Acceso inmediato</div>
                      <div className="text-slate-600">Empieza a calcular tu EVA en menos de 5 minutos</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-slate-900">Onboarding guiado</div>
                      <div className="text-slate-600">Te ayudamos a configurar tus primeros análisis</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-slate-900">Soporte en español</div>
                      <div className="text-slate-600">Equipo disponible para resolver tus dudas</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3" role="listitem">
                    <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-slate-900">Cancela cuando quieras</div>
                      <div className="text-slate-600">Sin permanencia ni cargos ocultos</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-10 w-10 rounded-full bg-emerald-200 ring-2 ring-white" aria-hidden="true" />
                      <div className="h-10 w-10 rounded-full bg-blue-200 ring-2 ring-white" aria-hidden="true" />
                      <div className="h-10 w-10 rounded-full bg-purple-200 ring-2 ring-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">+150 empresas</div>
                      <div className="text-sm text-slate-600">ya crean valor con EVA Finanzas</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900">Solicita tu acceso gratuito</h2>
                    <p className="mt-2 text-slate-600">14 días gratis • Sin tarjeta de crédito</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="mt-1"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email corporativo</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@empresa.com"
                          className="mt-1"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="mt-1"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Teléfono (opcional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+52 55 1234 5678"
                          className="mt-1"
                        />
                      </div>

                      <Button type="submit" className="w-full gap-2" size="lg">
                        Comenzar Gratis Ahora <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </Button>

                      <p className="text-center text-xs text-slate-500">
                        Al registrarte, aceptas nuestros{' '}
                        <a href="/legal/terms" className="underline hover:text-slate-700">
                          Términos de Servicio
                        </a>{' '}
                        y{' '}
                        <a href="/legal/privacy" className="underline hover:text-slate-700">
                          Política de Privacidad
                        </a>
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900">¡Gracias por registrarte!</h2>
                    <p className="mt-2 text-slate-600">
                      Te hemos enviado un email a <strong>{formData.email}</strong> con las instrucciones para acceder a tu cuenta.
                    </p>
                    <p className="mt-4 text-slate-600">
                      Revisa tu bandeja de entrada (y spam) para comenzar a usar EVA Finanzas.
                    </p>
                    <Button className="mt-6" asChild>
                      <a href="mailto:sierrascompany2025@gmail.com">
                        Contactar Soporte
                      </a>
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
