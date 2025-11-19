# EVA Finanzas

**La plataforma de gestión basada en valor económico agregado para PYMEs de Latinoamérica**

🌐 **Website:** [www.evafinanzas.com](https://www.evafinanzas.com)

## 🚀 Descripción

EVA Finanzas es una aplicación Next.js 16 que permite a empresas calcular automáticamente su EVA (Economic Value Added), transformar contabilidad tradicional en métricas estratégicas y tomar decisiones basadas en creación de valor real.

## ✨ Características Principales

- 🧮 **Cálculo Automático de EVA** - Motor contable que transforma datos contables en métricas económicas
- 📊 **WACC Profesional (WaaS)** - Cálculo del Costo Promedio Ponderado de Capital
- 🎯 **Análisis de Escenarios** - Modela decisiones estratégicas antes de ejecutarlas
- 🏢 **EVA por Unidades** - Desagrega valor por departamento o sucursal
- 💰 **Compensaciones EVA** - Sistema de bonos ligados a creación de valor
- 📈 **Dashboard Ejecutivo** - Visualización de métricas en tiempo real

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2
- **TypeScript:** 5
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Instalación

### Opción 1: Clonar desde GitHub

\`\`\`bash
git clone https://github.com/tu-usuario/eva-finanzas.git
cd eva-finanzas
npm install
npm run dev
\`\`\`

### Opción 2: Descargar ZIP desde v0

1. Descarga el ZIP desde v0
2. Extrae el contenido
3. Ejecuta los comandos:

\`\`\`bash
npm install
npm run dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🌐 Estructura del Proyecto

\`\`\`
eva-finanzas/
├── app/
│   ├── page.tsx              # Landing page principal
│   ├── layout.tsx            # Layout global con metadata
│   ├── globals.css           # Estilos globales
│   ├── features/             # Página de características
│   ├── pricing/              # Página de precios
│   ├── demo/                 # Página de registro/demo
│   ├── contact/              # Página de contacto
│   ├── about/                # Página acerca de
│   └── legal/
│       ├── terms/            # Términos de servicio
│       └── privacy/          # Política de privacidad
├── components/
│   ├── navbar.tsx            # Navegación principal
│   ├── footer.tsx            # Footer global
│   └── ui/                   # Componentes UI (shadcn)
├── docs/                     # Documentación del proyecto
│   ├── 01-modulos-oficiales.md
│   ├── 02-wireframes-detallados.md
│   ├── 03-arquitectura-tecnica-mvp.md
│   └── 04-pitch-y-landing-copy.md
└── README.md
\`\`\`

## 🚢 Deploy a Vercel

### Desde v0 (Recomendado)

1. Haz clic en el botón **"Publish"** en la esquina superior derecha de v0
2. Vercel creará automáticamente el proyecto
3. Ve a **Settings** en el sidebar izquierdo
4. Configura tu dominio personalizado `evafinanzas.com`

### Desde GitHub

\`\`\`bash
# Conecta tu repositorio a Vercel
vercel

# O despliega directamente
vercel --prod
\`\`\`

## 🌍 Configuración de Dominio

### DNS en Hostinger

Ya configurado:
- **A Record:** `@` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

### En Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega `evafinanzas.com` y `www.evafinanzas.com`
4. Vercel verificará automáticamente los DNS
5. SSL se activa automáticamente en 2-5 minutos

## 📝 Variables de Entorno

Actualmente no se requieren variables de entorno para la versión estática. Cuando integres backend o APIs:

\`\`\`bash
# .env.local
NEXT_PUBLIC_API_URL=tu_api_url
DATABASE_URL=tu_database_url
\`\`\`

## 🧪 Scripts Disponibles

\`\`\`bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta linter
\`\`\`

## 📚 Documentación Adicional

- [Módulos Oficiales](./docs/01-modulos-oficiales.md)
- [Wireframes Detallados](./docs/02-wireframes-detallados.md)
- [Arquitectura Técnica](./docs/03-arquitectura-tecnica-mvp.md)
- [Pitch y Copy](./docs/04-pitch-y-landing-copy.md)

## 🔐 Seguridad

- Encriptación SSL/TLS automática vía Vercel
- Headers de seguridad configurados
- Validación de formularios en cliente y servidor
- Sin datos sensibles en el código fuente

## 📞 Contacto

- **Email:** hola@evafinanzas.com
- **Website:** www.evafinanzas.com
- **Soporte:** Lunes a Viernes, 9am - 6pm (Ciudad de México)

## 📄 Licencia

© 2025 EVA Finanzas. Todos los derechos reservados.

## 🚀 Próximos Pasos

1. ✅ Deploy inicial a Vercel
2. ✅ Configuración de dominio personalizado
3. ⏳ Integración con backend API
4. ⏳ Conexión a base de datos
5. ⏳ Sistema de autenticación
6. ⏳ Módulo de importación contable
7. ⏳ Dashboard interactivo con datos reales

---

**¿Listo para crear valor real?** Visita [www.evafinanzas.com](https://www.evafinanzas.com) y comienza tu prueba gratuita de 14 días.
