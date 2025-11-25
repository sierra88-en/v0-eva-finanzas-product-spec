import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Suscripción Exitosa - EVA Finanzas",
  description: "Tu suscripción ha sido procesada exitosamente.",
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  return (
    <div className="min-w-0">
      <Navbar />

      <main id="main-content" className="min-h-screen">
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Card className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-slate-900">¡Suscripción Exitosa!</h1>
              <p className="mt-4 text-lg text-slate-600">
                Gracias por suscribirte a EVA Finanzas. Tu cuenta ha sido activada exitosamente.
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-slate-600">
                  Recibirás un correo de confirmación con los detalles de tu suscripción.
                </p>
                <p className="text-slate-600">Tu periodo de prueba de 14 días comienza ahora.</p>
              </div>
              {searchParams.session_id && (
                <p className="mt-4 text-sm text-slate-500">ID de sesión: {searchParams.session_id}</p>
              )}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/demo">Ir al Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Volver al inicio</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
