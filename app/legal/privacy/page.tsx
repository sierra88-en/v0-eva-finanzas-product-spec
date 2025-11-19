import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - EVA Finanzas',
  description: 'Política de privacidad y protección de datos de EVA Finanzas.',
}

export default function PrivacyPage() {
  return (
    <div className="min-w-0">
      <Navbar />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">Política de Privacidad</h1>
          <p className="mt-4 text-slate-600">Última actualización: Enero 2025</p>

          <div className="prose prose-slate mt-8 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Información que Recopilamos</h2>
            <p className="text-slate-600 leading-relaxed">
              En EVA Finanzas recopilamos la siguiente información:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Información de cuenta:</strong> Nombre, email, empresa, teléfono</li>
              <li><strong>Información financiera:</strong> Datos contables, balances, estados financieros</li>
              <li><strong>Información de uso:</strong> Páginas visitadas, características utilizadas, tiempo de uso</li>
              <li><strong>Información técnica:</strong> Dirección IP, navegador, dispositivo</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Cómo Usamos su Información</h2>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos su información para:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Calcular métricas financieras (EVA, WACC, etc.)</li>
              <li>Procesar pagos y gestionar suscripciones</li>
              <li>Enviar comunicaciones relacionadas con el servicio</li>
              <li>Detectar y prevenir fraudes o uso indebido</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Seguridad de Datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Implementamos medidas de seguridad de nivel empresarial para proteger su información:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Encriptación AES-256 para datos en reposo</li>
              <li>SSL/TLS para datos en tránsito</li>
              <li>Backups automáticos diarios</li>
              <li>Autenticación de dos factores (2FA)</li>
              <li>Auditorías de seguridad periódicas</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Compartir Información</h2>
            <p className="text-slate-600 leading-relaxed">
              NO vendemos ni alquilamos su información personal. Solo compartimos datos con:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Proveedores de servicios esenciales (hosting, procesamiento de pagos)</li>
              <li>Autoridades cuando sea legalmente requerido</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Sus Derechos</h2>
            <p className="text-slate-600 leading-relaxed">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar corrección de datos inexactos</li>
              <li>Solicitar eliminación de sus datos</li>
              <li>Exportar sus datos en formato legible</li>
              <li>Revocar consentimientos otorgados</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Cookies y Tecnologías Similares</h2>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos cookies para mejorar su experiencia, analizar el uso del servicio y personalizar contenido. Puede controlar las cookies desde la configuración de su navegador.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Retención de Datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Conservamos su información mientras su cuenta esté activa o según sea necesario para proporcionar servicios. Después de la cancelación, conservamos datos por un período de 90 días para permitir la reactivación.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Cambios a esta Política</h2>
            <p className="text-slate-600 leading-relaxed">
              Podemos actualizar esta política periódicamente. Los cambios significativos serán notificados por email con al menos 30 días de anticipación.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Contacto</h2>
            <p className="text-slate-600 leading-relaxed">
              Para ejercer sus derechos o consultas sobre privacidad, contáctenos en:
            </p>
            <p className="text-slate-600">
              Email: privacidad@evafinanzas.com<br />
              Dirección: Ciudad de México, México
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
