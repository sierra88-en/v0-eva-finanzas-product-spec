'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Contact form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-w-0">
      <Navbar />

      <main id="main-content">
        <section className="py-20" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 id="contact-heading" className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Contáctanos
              </h1>
              <p className="mt-4 text-pretty text-lg text-slate-600">
                ¿Tienes preguntas sobre EVA Finanzas? Estamos aquí para ayudarte.
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="p-8">
                  {!submitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h2>
                      <p className="mt-2 text-slate-600">
                        Responderemos en menos de 24 horas hábiles
                      </p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
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
                            <Label htmlFor="email">Email</Label>
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
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="company">Empresa</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Nombre de tu empresa"
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="subject">Asunto</Label>
                            <Input
                              id="subject"
                              name="subject"
                              type="text"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="¿En qué podemos ayudarte?"
                              className="mt-1"
                              aria-required="true"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message">Mensaje</Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Cuéntanos más sobre tu consulta..."
                            rows={6}
                            className="mt-1"
                            aria-required="true"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          Enviar Mensaje
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-slate-900">¡Mensaje enviado!</h2>
                      <p className="mt-2 text-slate-600">
                        Gracias por contactarnos. Responderemos a <strong>{formData.email}</strong> en menos de 24 horas hábiles.
                      </p>
                      <Button
                        className="mt-6"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            subject: '',
                            message: '',
                          })
                        }}
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  )}
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Mail className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Email</h3>
                  <p className="mt-2 text-slate-600">
                    Escríbenos directamente
                  </p>
                  <a
                    href="mailto:sierrascompany2025@gmail.com"
                    className="mt-2 block font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    sierrascompany2025@gmail.com
                  </a>
                </Card>

                <Card className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Teléfono</h3>
                  <p className="mt-2 text-slate-600">
                    Lunes a Viernes, 9am - 6pm
                  </p>
                  <a
                    href="tel:+529995708837"
                    className="mt-2 block font-medium text-blue-600 hover:text-blue-700"
                  >
                    +52 999 570 8837
                  </a>
                </Card>

                <Card className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                    <MapPin className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Oficinas</h3>
                  <p className="mt-2 text-slate-600">
                    Ciudad de México, México
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Atendemos empresas en toda Latinoamérica
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
