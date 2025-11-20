import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">EVA Finanzas</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              La plataforma de gestión basada en valor económico agregado para PYMEs de Latinoamérica.
            </p>
            <div className="mt-4 space-y-3">
              <a 
                href="https://wa.me/529995708837" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 py-0.5"
                aria-label="Contactar por WhatsApp al +52 999 570 8837"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>+52 999 570 8837</span>
              </a>
              <a 
                href="mailto:sierrascompany2025@gmail.com" 
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 py-0.5"
                aria-label="Enviar correo a sierrascompany2025@gmail.com"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">sierrascompany2025@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mérida, Yucatán, México</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Producto</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400" role="list">
              <li>
                <Link href="/features" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/demo" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Demo interactiva
                </Link>
              </li>
              <li>
                <Link href="/features#integrations" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Integraciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400" role="list">
              <li>
                <Link href="/about" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Acerca de EVA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="/demo" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400" role="list">
              <li>
                <Link href="/about" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Acerca de nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 EVA Finanzas. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            <a 
              href="https://www.evafinanzas.com" 
              className="transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
              rel="noopener"
            >
              www.evafinanzas.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
