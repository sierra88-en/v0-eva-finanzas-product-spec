import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evafinanzas.com'),
  title: {
    default: 'EVA Finanzas - ¿Tu empresa crea o destruye valor real?',
    template: '%s | EVA Finanzas'
  },
  description: 'Calcula automáticamente tu EVA (Economic Value Added), transforma tu contabilidad en métricas estratégicas y toma decisiones basadas en creación de valor real.',
  keywords: ['EVA', 'Economic Value Added', 'Valor Económico Agregado', 'WACC', 'finanzas empresariales', 'gestión financiera', 'PYMEs', 'México', 'Latinoamérica'],
  authors: [{ name: 'EVA Finanzas' }],
  creator: 'EVA Finanzas',
  publisher: 'EVA Finanzas',
  alternates: {
    canonical: 'https://www.evafinanzas.com',
  },
  openGraph: {
    title: 'EVA Finanzas - Gestión basada en valor económico agregado',
    description: 'La plataforma que permite a PYMEs calcular su EVA real, entender si crean valor y tomar decisiones estratégicas.',
    url: 'https://www.evafinanzas.com',
    siteName: 'EVA Finanzas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EVA Finanzas - Plataforma de gestión basada en valor económico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVA Finanzas - ¿Tu empresa crea o destruye valor?',
    description: 'Calcula tu EVA automáticamente y descubre si tu negocio genera riqueza real.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'EVA Finanzas',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'Offer',
                price: '16',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '127',
              },
              operatingSystem: 'Web',
              description: 'Plataforma de gestión financiera basada en Economic Value Added (EVA) para PYMEs',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
