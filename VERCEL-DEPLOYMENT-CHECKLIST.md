# ✅ EVA Finanzas - Checklist de Despliegue a Vercel

## Pre-Despliegue

### 1. Repositorio GitHub
- [ ] Código actualizado en `main` branch
- [ ] `.gitignore` incluye `.env.local` y `.env`
- [ ] README.md actualizado
- [ ] Sin errores en `npm run build` localmente

### 2. Variables de Entorno
- [ ] Supabase URL obtenida
- [ ] Supabase anon key obtenida
- [ ] Stripe publishable key obtenida
- [ ] Stripe secret key obtenida
- [ ] Site URL definida: `https://www.evafinanzas.com`

### 3. Dependencias
- [ ] `package.json` actualizado con:
  - [ ] `@supabase/ssr`
  - [ ] `@supabase/supabase-js`
  - [ ] `stripe`
  - [ ] `@stripe/stripe-js`
  - [ ] `@vercel/analytics`

---

## Durante el Despliegue

### 1. Conectar Proyecto a Vercel
- [ ] Importar desde GitHub
- [ ] Framework detectado: Next.js
- [ ] Build command: `next build`
- [ ] Output directory: `.next`
- [ ] Install command: `npm install`

### 2. Configurar Variables de Entorno en Vercel
Agregar en Vercel Dashboard → Settings → Environment Variables:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
STRIPE_SECRET_KEY=sk_live_xxxxx (o sk_test_xxxxx para testing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx (o pk_test_xxxxx)
STRIPE_WEBHOOK_SECRET=whsec_xxxxx (obtener después de crear webhook)
NEXT_PUBLIC_SITE_URL=https://www.evafinanzas.com
\`\`\`

- [ ] Variables agregadas para **Production**
- [ ] Variables agregadas para **Preview** (opcional, puede usar test keys)
- [ ] Variables agregadas para **Development** (opcional)

### 3. Configurar Dominio
- [ ] Agregar dominio en Vercel: Settings → Domains
- [ ] Dominio principal: `www.evafinanzas.com`
- [ ] Redirect: `evafinanzas.com` → `www.evafinanzas.com`
- [ ] Esperar verificación DNS (puede tomar minutos u horas)

---

## Post-Despliegue

### 1. Verificar Build
- [ ] Build completado sin errores
- [ ] Sitio accesible en URL de Vercel (.vercel.app)
- [ ] Todas las rutas responden correctamente

### 2. Configurar Stripe Webhook
- [ ] Ir a Stripe Dashboard → Developers → Webhooks
- [ ] Agregar endpoint: `https://www.evafinanzas.com/api/webhooks/stripe`
- [ ] Seleccionar eventos:
  - [ ] `checkout.session.completed`
  - [ ] `customer.subscription.created`
  - [ ] `customer.subscription.updated`
  - [ ] `customer.subscription.deleted`
- [ ] Copiar **Signing secret**
- [ ] Agregar a Vercel como `STRIPE_WEBHOOK_SECRET`
- [ ] Redeploy proyecto en Vercel

### 3. Testing Funcional
- [ ] Home page carga correctamente
- [ ] Navegación funciona (todas las páginas)
- [ ] Formulario de demo funciona
- [ ] Formulario de contacto funciona
- [ ] Navegación móvil responsiva funciona
- [ ] Links del footer funcionan

### 4. Testing de Integraciones
- [ ] Supabase conecta correctamente (revisar logs)
- [ ] Stripe webhook recibe eventos (hacer test con checkout)
- [ ] No hay errores en Vercel Function Logs

### 5. SEO y Performance
- [ ] SSL activo (HTTPS con candado verde)
- [ ] Meta tags correctos (verificar con View Source)
- [ ] Open Graph tags presentes
- [ ] Sitemap accesible: `/sitemap.xml`
- [ ] Robots.txt accesible: `/robots.txt`
- [ ] Favicon carga correctamente

### 6. Dominio Personalizado
- [ ] `www.evafinanzas.com` resuelve correctamente
- [ ] `evafinanzas.com` redirige a `www.evafinanzas.com`
- [ ] Certificado SSL activo para ambos dominios
- [ ] No hay warnings de seguridad en navegador

---

## Monitoreo Continuo

### 1. Analytics
- [ ] Vercel Analytics activo
- [ ] Tracking de visitas funcionando

### 2. Error Tracking
- [ ] Revisar Vercel logs diariamente
- [ ] Configurar alertas de error (opcional)
- [ ] Sentry configurado (opcional, futuro)

### 3. Performance
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals en verde
- [ ] Tiempo de carga < 3 segundos

---

## Rollback Plan

Si algo sale mal:

### Opción 1: Revertir a deploy anterior
1. Ve a Vercel Dashboard → Deployments
2. Encuentra el último deploy exitoso
3. Clic en los 3 puntos → "Promote to Production"

### Opción 2: Rollback desde Git
\`\`\`bash
git revert HEAD
git push origin main
\`\`\`
Vercel auto-desplegará la versión anterior.

---

## Contacto de Emergencia

**Desarrollador**: Sierra's Company  
**Email**: sierrascompany2025@gmail.com  
**WhatsApp**: +52 999 570 8837

---

## Estado Actual

**Fecha de último deploy**: _Pendiente_  
**URL de producción**: https://www.evafinanzas.com  
**URL de preview**: https://v0-eva-finanzas-product-spec.vercel.app  
**Estado**: 🟢 Listo para desplegar

---

## Notas Adicionales

### Modo Test vs Producción en Stripe

**Test Mode** (para desarrollo):
- Usa claves `sk_test_` y `pk_test_`
- Tarjetas de prueba: 4242 4242 4242 4242
- No se cobran pagos reales

**Live Mode** (producción):
- Usa claves `sk_live_` y `pk_live_`
- Requiere cuenta Stripe verificada
- Se procesan pagos reales

**Recomendación**: Empieza en Test Mode hasta validar todo funciona.

---

## ✅ LISTO PARA PRODUCCIÓN

Una vez completado este checklist, tu aplicación EVA Finanzas estará 100% operativa en producción.
