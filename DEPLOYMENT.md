# Guía de Despliegue - EVA Finanzas

Esta guía detalla el proceso completo para desplegar EVA Finanzas en producción usando Vercel y configurar el dominio www.evafinanzas.com.

## 📋 Prerrequisitos

- [x] Cuenta de Vercel (gratis en vercel.com)
- [x] Dominio evafinanzas.com registrado en Hostinger
- [x] Registros DNS configurados en Hostinger
- [x] Código del proyecto en GitHub o v0

## 🚀 Método 1: Deploy desde v0 (Más Rápido)

### Paso 1: Publicar desde v0

1. Abre tu proyecto en v0.app
2. Haz clic en el botón **"Publish"** (esquina superior derecha)
3. Vercel creará automáticamente el proyecto
4. Espera a que termine el build (1-2 minutos)

### Paso 2: Verificar el Deploy

1. Una vez completado, obtendrás una URL temporal: `eva-finanzas-xxx.vercel.app`
2. Visita la URL para confirmar que todo funciona correctamente
3. Verifica que todas las rutas funcionen:
   - `/` (Home)
   - `/features` (Características)
   - `/pricing` (Precios)
   - `/demo` (Demo/Registro)
   - `/contact` (Contacto)
   - `/about` (Acerca de)

### Paso 3: Configurar Dominio Personalizado

1. En v0, ve al sidebar izquierdo → **Settings**
2. Busca la sección **"Vercel Project Connection"**
3. Haz clic en **"Configure Domain"** o **"Add Domain"**
4. Agrega ambos dominios:
   - `evafinanzas.com`
   - `www.evafinanzas.com`
5. Vercel verificará automáticamente los registros DNS
6. Espera 2-5 minutos para que se active el SSL

## 🔧 Método 2: Deploy desde GitHub

### Paso 1: Subir Código a GitHub

\`\`\`bash
# Inicializa git si no lo has hecho
git init

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Initial commit - EVA Finanzas"

# Conecta con tu repositorio de GitHub
git remote add origin https://github.com/tu-usuario/eva-finanzas.git

# Sube el código
git push -u origin main
\`\`\`

### Paso 2: Conectar Vercel con GitHub

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Selecciona **"Import Git Repository"**
4. Elige tu repositorio `eva-finanzas`
5. Configura el proyecto:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (raíz del proyecto)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)
6. Haz clic en **"Deploy"**

### Paso 3: Agregar Dominio Personalizado

1. Una vez desplegado, ve a **Project Settings → Domains**
2. Haz clic en **"Add Domain"**
3. Ingresa `evafinanzas.com` y haz clic en **"Add"**
4. Repite el proceso para `www.evafinanzas.com`
5. Vercel mostrará el estado de verificación de DNS

## 🌐 Configuración DNS en Hostinger

### Registros Actuales (Ya Configurados)

✅ **A Record:**
- **Type:** A
- **Name:** @ (o root)
- **Value:** 76.76.21.21
- **TTL:** Automático

✅ **CNAME Record:**
- **Type:** CNAME
- **Name:** www
- **Value:** cname.vercel-dns.com
- **TTL:** Automático

### Verificar Configuración DNS

Puedes verificar que los DNS estén correctamente configurados usando estas herramientas:

\`\`\`bash
# Verifica A record
dig evafinanzas.com A

# Verifica CNAME
dig www.evafinanzas.com CNAME

# O usa nslookup
nslookup evafinanzas.com
nslookup www.evafinanzas.com
\`\`\`

También puedes usar herramientas online:
- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://www.whatsmydns.net/)

## 🔐 Configuración SSL

### SSL Automático de Vercel

Vercel configura automáticamente certificados SSL gratuitos de Let's Encrypt:

1. Una vez verificados los registros DNS
2. El certificado SSL se genera automáticamente (2-5 minutos)
3. Tu sitio será accesible vía HTTPS
4. El tráfico HTTP redirige automáticamente a HTTPS

### Verificar SSL Activo

1. Visita `https://www.evafinanzas.com`
2. Verifica el candado en la barra de direcciones
3. Haz clic en el candado para ver detalles del certificado

## ✅ Checklist de Post-Deploy

Después del deploy, verifica lo siguiente:

- [ ] El sitio carga en `https://www.evafinanzas.com`
- [ ] El sitio carga en `https://evafinanzas.com` (sin www)
- [ ] Todas las rutas principales funcionan:
  - [ ] `/` - Landing page
  - [ ] `/features` - Características
  - [ ] `/pricing` - Precios
  - [ ] `/demo` - Formulario de registro
  - [ ] `/contact` - Formulario de contacto
  - [ ] `/about` - Acerca de
  - [ ] `/legal/terms` - Términos
  - [ ] `/legal/privacy` - Privacidad
- [ ] La navegación móvil funciona correctamente
- [ ] Los formularios de contacto/demo funcionan
- [ ] Los links del footer funcionan
- [ ] SSL está activo (candado verde)
- [ ] Las imágenes cargan correctamente
- [ ] No hay errores en la consola del navegador

## 🔄 Actualizaciones Futuras

### Desde v0
Cualquier cambio que hagas en v0 se sincronizará automáticamente con GitHub y Vercel.

### Desde GitHub
\`\`\`bash
# Hacer cambios en el código
git add .
git commit -m "Descripción del cambio"
git push

# Vercel desplegará automáticamente
\`\`\`

### Deploy Manual
\`\`\`bash
# Usando Vercel CLI
vercel --prod
\`\`\`

## 🐛 Troubleshooting

### Error: "Domain not verified"

**Solución:**
1. Verifica que los registros DNS estén correctos en Hostinger
2. Espera 24-48 horas para propagación completa de DNS
3. Usa `dig` o `nslookup` para verificar que los registros sean visibles

### Error: "Build failed"

**Solución:**
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel Dashboard
3. Asegúrate de que todas las dependencias estén en `package.json`

### Error: "404 on routes"

**Solución:**
1. Verifica que las rutas existan en `/app`
2. Confirma que los archivos se llamen `page.tsx`
3. Reinicia el build en Vercel

### SSL no se activa

**Solución:**
1. Espera 5-10 minutos después de agregar el dominio
2. Verifica que los DNS estén propagados globalmente
3. En Vercel Dashboard → Domains → Refresh SSL

## 📊 Monitoreo y Analytics

### Vercel Analytics (Incluido Gratis)

1. Ve a tu proyecto en Vercel
2. Haz clic en la pestaña **"Analytics"**
3. Podrás ver:
   - Visitantes únicos
   - Page views
   - Países de origen
   - Dispositivos utilizados

### Agregar Google Analytics (Opcional)

\`\`\`tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

## 🎉 ¡Listo!

Tu aplicación EVA Finanzas ya está en producción en www.evafinanzas.com.

**Próximos pasos recomendados:**
1. Configura Google Search Console
2. Agrega meta tags para SEO
3. Implementa backend API para los formularios
4. Conecta base de datos para almacenar registros
5. Implementa sistema de autenticación

---

**¿Necesitas ayuda?** Contacta al equipo de soporte en hola@evafinanzas.com
