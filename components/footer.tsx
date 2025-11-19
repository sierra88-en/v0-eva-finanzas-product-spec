import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">EVA Finanzas</h3>
            <p className="mt-2 text-sm text-slate-400">
              La plataforma de gestión basada en valor económico agregado para PYMEs de Latinoamérica.
            </p>
            <div className="mt-4 space-y-2">
              <a 
                href="tel:+529995708837" 
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                aria-label="Llamar a EVA Finanzas"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+52 999 570 8837</span>
              </a>
              <a 
                href="mailto:sierrascompany2025@gmail.com" 
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                aria-label="Enviar correo a EVA Finanzas"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>sierrascompany2025@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Producto</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/features#integrations" className="hover:text-white transition-colors">
                  Integraciones
                </Link>
              </li>
              <li>
                <Link href="/features#testimonials" className="hover:text-white transition-colors">
                  Casos de éxito
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/eva-guide" className="hover:text-white transition-colors">
                  Guía de EVA
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Empresa</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          © 2025 EVA Finanzas. Todos los derechos reservados. | www.evafinanzas.com
        </div>
      </div>
    </footer>
  )
}
