# Configuración de Stripe

Esta guía te ayudará a configurar Stripe para EVA Finanzas.

## Productos Configurados

Los siguientes product IDs están configurados en el código:

- **Plan Base**: `prod_TUJtWgIhJQmANM` - $16 USD/mes
- **Plan Pro**: `prod_TUJwvXxMQq15Ek` - $49 USD/mes
- **Plan Enterprise**: `prod_TUJxOqzuHI1yAU` - $119 USD/mes

## Pasos de Configuración

### 1. Variables de Entorno

Agrega estas variables en Vercel o tu `.env.local`:

\`\`\`env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
\`\`\`

### 2. Configurar Webhook en Stripe

1. Ve a: https://dashboard.stripe.com/webhooks
2. Click en "Add endpoint"
3. URL del endpoint: `https://tudominio.com/api/webhooks/stripe`
4. Selecciona estos eventos:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copia el "Signing secret" y guárdalo en `STRIPE_WEBHOOK_SECRET`

### 3. Verificar Productos

Asegúrate de que los productos en Stripe tengan:
- Los IDs correctos (prod_TUJtWgIhJQmANM, prod_TUJwvXxMQq15Ek, prod_TUJxOqzuHI1yAU)
- Precios configurados en USD
- Modo de facturación recurrente (mensual)

### 4. Probar la Integración

1. Ve a `/pricing` en tu sitio
2. Click en cualquier plan
3. Completa el checkout con una tarjeta de prueba: `4242 4242 4242 4242`
4. Verifica que el webhook reciba el evento

## Tarjetas de Prueba

Usa estas tarjetas en modo test:

- **Exitosa**: 4242 4242 4242 4242
- **Rechazada**: 4000 0000 0000 0002
- **Requiere autenticación**: 4000 0025 0000 3155

Cualquier fecha futura y cualquier CVC funcionarán.

## API Endpoints

### POST /api/stripe/checkout

Crea una sesión de checkout.

**Body:**
\`\`\`json
{
  "plan": "base" | "pro" | "enterprise",
  "customerEmail": "user@example.com" (opcional)
}
\`\`\`

**Response:**
\`\`\`json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
\`\`\`

### POST /api/webhooks/stripe

Recibe eventos de Stripe. Valida la firma usando `STRIPE_WEBHOOK_SECRET`.

## Próximos Pasos

1. ✅ Integración básica completa
2. ⏳ Guardar suscripciones en base de datos
3. ⏳ Enviar emails de bienvenida
4. ⏳ Portal del cliente para gestionar suscripciones
5. ⏳ Dashboard de admin para ver suscripciones
