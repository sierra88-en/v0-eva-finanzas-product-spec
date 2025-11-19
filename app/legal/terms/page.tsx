import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Servicio - EVA Finanzas',
  description: 'Términos y condiciones de uso de la plataforma EVA Finanzas.',
}

export default function TermsPage() {
  return (
    <div className="min-w-0">
      <Navbar />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">Términos de Servicio</h1>
          <p className="mt-4 text-slate-600">Última actualización: Enero 2025</p>

          <div className="prose prose-slate mt-8 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Aceptación de Términos</h2>
            <p className="text-slate-600 leading-relaxed">
              Al acceder y utilizar EVA Finanzas (www.evafinanzas.com), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Descripción del Servicio</h2>
            <p className="text-slate-600 leading-relaxed">
              EVA Finanzas es una plataforma SaaS que proporciona herramientas de análisis financiero, cálculo de EVA (Economic Value Added), WACC y métricas relacionadas para empresas.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Cuenta de Usuario</h2>
            <p className="text-slate-600 leading-relaxed">
              Para utilizar EVA Finanzas, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Planes y Pagos</h2>
            <p className="text-slate-600 leading-relaxed">
              EVA Finanzas ofrece diferentes planes de suscripción (Base, Pro, Enterprise). Los pagos se procesan de forma recurrente según el plan seleccionado. Puede cancelar su suscripción en cualquier momento sin penalización.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Uso Aceptable</h2>
            <p className="text-slate-600 leading-relaxed">
              Usted se compromete a utilizar EVA Finanzas únicamente para fines legítimos y de acuerdo con todas las leyes aplicables. No debe:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Usar el servicio para actividades ilegales o fraudulentas</li>
              <li>Intentar acceder sin autorización a otros sistemas o cuentas</li>
              <li>Transmitir malware, virus o código malicioso</li>
              <li>Realizar ingeniería inversa del software</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Propiedad Intelectual</h2>
            <p className="text-slate-600 leading-relaxed">
              Todo el contenido, características y funcionalidad de EVA Finanzas son propiedad exclusiva de la empresa y están protegidos por derechos de autor y otras leyes de propiedad intelectual.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Limitación de Responsabilidad</h2>
            <p className="text-slate-600 leading-relaxed">
              EVA Finanzas proporciona herramientas de análisis financiero, pero no constituye asesoramiento financiero profesional. Las decisiones tomadas con base en los datos proporcionados son responsabilidad exclusiva del usuario.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Modificaciones</h2>
            <p className="text-slate-600 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos serán notificados con al menos 30 días de anticipación.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Contacto</h2>
            <p className="text-slate-600 leading-relaxed">
              Si tiene preguntas sobre estos Términos de Servicio, contáctenos en: hola@evafinanzas.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
