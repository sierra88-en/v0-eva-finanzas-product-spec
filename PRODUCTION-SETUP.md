# 🚀 EVA Finanzas - Production Setup Guide

## 📋 Pre-requisitos

Antes de desplegar a producción, asegúrate de tener:

1. ✅ Cuenta de Vercel (conectada a GitHub)
2. ✅ Cuenta de Supabase (proyecto creado)
3. ✅ Cuenta de Stripe (claves API obtenidas)
4. ✅ Dominio configurado: www.evafinanzas.com

---

## 🔧 Paso 1: Configurar Supabase

### 1.1 Obtener credenciales

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Settings → API
3. Copia los valores:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 1.2 Configurar autenticación (opcional)

Si vas a usar autenticación:

1. Authentication → Providers → Email
2. Configura redirect URLs:
   - Production: `https://www.evafinanzas.com/**`
   - Development: `http://localhost:3000/**`

---

## 💳 Paso 2: Configurar Stripe

### 2.1 Obtener claves API

1. Ve a [Stripe Dashboard](https://dashboard.stripe.com)
2. Developers → API keys
3. Copia:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 2.2 Configurar Webhook (después del deploy)

Una vez desplegado en Vercel:

1. Stripe Dashboard → Developers → Webhooks
2. Clic en "Add endpoint"
3. URL: `https://www.evafinanzas.com/api/webhooks/stripe`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copia el **Signing secret** → `STRIPE_WEBHOOK_SECRET`

---

## 🌐 Paso 3: Configurar Variables de Entorno en Vercel

### 3.1 Desde el dashboard de Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las siguientes variables:

\`\`\`bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.evafinanzas.com
\`\`\`

### 3.2 Desarrollo local

Crea un archivo `.env.local` en la raíz del proyecto:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Rellena con tus valores de desarrollo.

---

## 🚀 Paso 4: Desplegar a Vercel

### Opción A: Desde GitHub (Recomendado)

1. Push tu código a GitHub:
\`\`\`bash
git add .
git commit -m "Ready for production"
git push origin main
\`\`\`

2. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
3. New Project → Import desde GitHub
4. Selecciona el repo: `v0-eva-finanzas-product-spec`
5. Vercel detectará automáticamente Next.js
6. Agrega las variables de entorno (ver Paso 3)
7. Clic en **Deploy**

### Opción B: Desde CLI

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
\`\`\`

---

## 🌍 Paso 5: Configurar Dominio Personalizado

### 5.1 En Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega:
   - `evafinanzas.com`
   - `www.evafinanzas.com`

### 5.2 En Hostinger (Ya configurado)

✅ Ya configuraste:
- **A Record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

Vercel verificará automáticamente los registros DNS.

---

## ✅ Paso 6: Verificación Post-Deploy

### 6.1 Checklist

- [ ] Sitio carga en https://www.evafinanzas.com
- [ ] SSL activo (candado verde en navegador)
- [ ] Todas las páginas funcionan:
  - [ ] Home (/)
  - [ ] Features (/features)
  - [ ] Pricing (/pricing)
  - [ ] Demo (/demo)
  - [ ] Contact (/contact)
  - [ ] About (/about)
  - [ ] Terms (/legal/terms)
  - [ ] Privacy (/legal/privacy)
- [ ] Formularios funcionan (demo y contacto)
- [ ] Navegación móvil funciona
- [ ] SEO meta tags correctos (inspeccionar con View Source)

### 6.2 Testing de Stripe

Para probar pagos en modo test:

Tarjetas de prueba:
- **Éxito**: 4242 4242 4242 4242
- **Rechazada**: 4000 0000 0000 0002
- CVV: cualquier 3 dígitos
- Fecha: cualquier fecha futura

---

## 📊 Paso 7: Monitoreo

### Vercel Analytics

Ya incluido con `@vercel/analytics`. Puedes ver métricas en:
- Vercel Dashboard → Analytics

### Logs

Para ver logs de producción:
\`\`\`bash
vercel logs
\`\`\`

---

## 🔐 Seguridad

### Variables de entorno protegidas

✅ Nunca subas `.env.local` a GitHub (ya está en `.gitignore`)

### HTTPS

✅ Vercel activa automáticamente SSL/TLS

### CORS

Si necesitas configurar CORS para APIs externas, edita `next.config.mjs`:

\`\`\`js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://www.evafinanzas.com' },
        ],
      },
    ]
  },
}
\`\`\`

---

## 🆘 Troubleshooting

### Error: Environment variables not found

- Verifica que agregaste las variables en Vercel Dashboard
- Redeploy después de agregar variables

### Error: Supabase connection failed

- Verifica que las URLs no tengan espacios o caracteres extras
- Confirma que el proyecto de Supabase esté activo

### Error: Stripe webhook signature invalid

- Verifica que el `STRIPE_WEBHOOK_SECRET` sea el correcto
- Confirma que la URL del webhook en Stripe sea exacta

### DNS no resuelve

- Espera 24-48 horas para propagación DNS completa
- Verifica registros con: `dig www.evafinanzas.com`

---

## 📞 Soporte

- **Email**: sierrascompany2025@gmail.com
- **WhatsApp**: +52 999 570 8837

---

## 🎉 ¡Listo!

Tu aplicación EVA Finanzas está ahora en producción en **https://www.evafinanzas.com**

Siguientes pasos recomendados:
1. ✅ Configura Google Analytics
2. ✅ Implementa base de datos real con Supabase
3. ✅ Activa modo live en Stripe cuando estés listo para cobrar
4. ✅ Configura backups automáticos
5. ✅ Implementa monitoring con Sentry o similar
