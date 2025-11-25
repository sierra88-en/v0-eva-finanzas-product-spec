# Resumen de Reparación de Stripe

## Problema Original
\`\`\`
Neither apiKey nor config.authenticator provided
Error: Failed to collect page data for /api/stripe/checkout
\`\`\`

## Causa del Error
1. **API Version incorrecta**: Se estaba usando `2025-01-27.acacia` (demasiado nueva)
2. **price_data en lugar de priceId**: El checkout usaba `price_data` dinámico en lugar de Price IDs predefinidos
3. **Falta de Price IDs**: Los productos solo tenían Product IDs pero no Price IDs

## Solución Aplicada

### ✅ Archivos Modificados

#### 1. `lib/stripe/server.ts`
**Cambio**: Actualizada la apiVersion a una versión estable
\`\`\`typescript
// Antes:
apiVersion: "2025-01-27.acacia"

// Ahora:
apiVersion: "2024-11-20.acacia"
\`\`\`

#### 2. `lib/stripe/products.ts`
**Cambio**: Agregado campo `priceId` a cada producto
\`\`\`typescript
base: {
  id: "prod_TUJtWgIhJQmANM",
  priceId: "price_1QpLqvKj9eYZzB6D5gRj4MZN", // ← NUEVO
  // ... resto
}
\`\`\`

**⚠️ ACCIÓN REQUERIDA**: Debes obtener los Price IDs reales desde [Stripe Dashboard](https://dashboard.stripe.com/products)

#### 3. `app/api/stripe/checkout/route.ts`
**Cambio**: Usar `priceId` directamente en lugar de `price_data`
\`\`\`typescript
// Antes:
line_items: [
  {
    price_data: {
      currency: product.currency,
      product: product.id,
      recurring: { interval: product.interval },
      unit_amount: product.price * 100,
    },
    quantity: 1,
  },
]

// Ahora:
line_items: [
  {
    price: product.priceId, // ← Uso directo del Price ID
    quantity: 1,
  },
]
\`\`\`

**Beneficios**:
- Más rápido (no crea precios dinámicos)
- Más confiable (usa precios predefinidos en Stripe)
- Mejor para reportes y análisis

#### 4. `app/actions/stripe.ts`
**Cambio**: Mismo patrón que el route - usar `priceId` directamente

#### 5. `STRIPE-SETUP.md`
**Cambio**: Agregada sección sobre cómo obtener los Price IDs

## Estructura Final de Archivos

\`\`\`
lib/
├── stripe/
│   ├── server.ts       ✅ Cliente de Stripe (solo servidor)
│   ├── client.ts       ✅ Cliente para browser (@stripe/stripe-js)
│   └── products.ts     ✅ Configuración de productos con priceIds

app/
├── api/
│   ├── stripe/
│   │   └── checkout/
│   │       └── route.ts    ✅ API route para crear sesiones
│   └── webhooks/
│       └── stripe/
│           └── route.ts    ✅ Webhook handler
└── actions/
    └── stripe.ts           ✅ Server actions

components/
└── pricing-card.tsx        ✅ Componente conectado
\`\`\`

## ¿Cómo Obtener los Price IDs?

1. Ve a https://dashboard.stripe.com/products
2. Haz clic en cada producto (Base, Pro, Enterprise)
3. En la sección de precios, copia el **Price ID** (empieza con `price_`)
4. Actualiza `lib/stripe/products.ts` con los IDs reales

**Ejemplo visual**:
\`\`\`
Producto: Plan Base
├── Product ID: prod_TUJtWgIhJQmANM  ✅ Ya tienes este
└── Precio: $16 USD/mes
    └── Price ID: price_xxxxxxxxxxxxx  ⚠️ Necesitas copiar este
\`\`\`

## Variables de Entorno Necesarias

Asegúrate de tener estas variables configuradas en Vercel:

\`\`\`env
# Obligatorias
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=https://www.evafinanzas.com

# Para webhooks (producción)
STRIPE_WEBHOOK_SECRET=whsec_...
\`\`\`

## Testing

### 1. Desarrollo Local
\`\`\`bash
# Las variables ya están configuradas en Vercel
# Solo asegúrate de tener los Price IDs correctos
\`\`\`

### 2. Probar el Checkout
\`\`\`typescript
// En cualquier componente:
import { createCheckoutSession } from "@/app/actions/stripe"

const { url } = await createCheckoutSession("base")
window.location.href = url
\`\`\`

### 3. Verificar Logs
Busca en los logs de Vercel:
\`\`\`
[v0] Creating checkout session for plan: base
[v0] Using priceId: price_xxxxxxxxxxxxx
[v0] Checkout session created: cs_test_xxxxx
\`\`\`

## Checklist Final

- [x] ✅ `lib/stripe/server.ts` - API version estable
- [x] ✅ `lib/stripe/products.ts` - Agregado campo priceId
- [x] ✅ `app/api/stripe/checkout/route.ts` - Usar priceId directamente
- [x] ✅ `app/actions/stripe.ts` - Usar priceId directamente
- [x] ✅ `STRIPE-SETUP.md` - Documentación actualizada
- [ ] ⚠️ **PENDIENTE**: Actualizar con los Price IDs reales de tu Stripe Dashboard

## Notas Importantes

1. **No usar price_data en producción**: Es más lento y puede causar problemas
2. **Siempre usar priceId**: Referencia precios ya creados en Stripe
3. **Verificar apiVersion**: Usar versiones estables, no experimentales
4. **STRIPE_SECRET_KEY**: Solo debe usarse en servidor, nunca en cliente
5. **Logs con [v0]**: Facilita el debugging en producción

## Soporte

Si el error persiste después de aplicar estos cambios:

1. Verifica que `STRIPE_SECRET_KEY` esté configurada en Vercel
2. Confirma que los Price IDs son correctos y existen en tu Stripe account
3. Revisa los logs de Vercel para ver el error específico
4. Verifica que no haya archivos duplicados (`utils/stripe.ts` o `lib/stripe.ts`)
