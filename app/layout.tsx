import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVA Finanzas - ¿Tu empresa crea o destruye valor real?',
  description: 'Calcula automáticamente tu EVA (Economic Value Added), transforma tu contabilidad en métricas estratégicas y toma decisiones basadas en creación de valor real.',
  keywords: 'EVA, Economic Value Added, Valor Económico Agregado, WACC, finanzas empresariales, gestión financiera, PYMEs, México, Latinoamérica',
  openGraph: {
    title: 'EVA Finanzas - Gestión basada en valor económico agregado',
    description: 'La plataforma que permite a PYMEs calcular su EVA real, entender si crean valor y tomar decisiones estratégicas.',
    url: 'https://www.evafinanzas.com',
    siteName: 'EVA Finanzas',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVA Finanzas - ¿Tu empresa crea o destruye valor?',
    description: 'Calcula tu EVA automáticamente y descubre si tu negocio genera riqueza real.',
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
