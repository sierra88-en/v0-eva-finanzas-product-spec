'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm" aria-label="Navegación principal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-emerald-600 transition-colors hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded" aria-label="EVA Finanzas - Página principal">
              EVA Finanzas
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/features" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">
              Características
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">
              Precios
            </Link>
            <Link href="/demo" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">
              Demo
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">
              Contacto
            </Link>
            <Button size="sm" asChild className="transition-all hover:scale-105">
              <Link href="/demo">Comenzar Gratis</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="border-t border-slate-200 py-4 md:hidden" role="navigation" aria-label="Navegación móvil">
            <div className="flex flex-col gap-4">
              <Link
                href="/features"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/demo"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button size="sm" asChild className="w-full">
                <Link href="/demo">Comenzar Gratis</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
