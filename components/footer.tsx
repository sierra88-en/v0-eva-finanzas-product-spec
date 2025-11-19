import Link from 'next/link'

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
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Producto</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-white">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/features#integrations" className="hover:text-white">
                  Integraciones
                </Link>
              </li>
              <li>
                <Link href="/features#testimonials" className="hover:text-white">
                  Casos de éxito
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/eva-guide" className="hover:text-white">
                  Guía de EVA
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Empresa</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white">
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
