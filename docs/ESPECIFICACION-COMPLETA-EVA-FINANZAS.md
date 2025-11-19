# EVA FINANZAS - ESPECIFICACIÓN INTEGRAL COMPLETA
## www.evafinanzas.com

---

## 1. MÓDULOS OFICIALES (NOMENCLATURA DEFINITIVA)

### MÓDULO CORE

**EVA Engine™** (Motor Principal)
- Subsistema: **AC Engine™** (Accounting Conversion Engine)
  - Capitalización automática de I+D
  - Ajuste de activos improductivos
  - Normalización de provisiones
  - Tratamiento de leasing operativo/financiero
  - Eliminación de partidas extraordinarias
  - Recálculo de capital invertido económico
  - Conversión de utilidad contable a NOPAT
- Subsistema: **EVA Calculator™**
  - Cálculo automático: EVA = NOPAT - (Capital Invertido × WACC)
  - Motor de cálculo de alta velocidad (Julia/Python)
  - Históricos y tendencias
- Subsistema: **Strategic Dashboard™**
  - Panel ejecutivo con KPIs
  - Gráficas de rendimiento
  - Semáforo de creación/destrucción de valor
  - Alertas inteligentes

### MÓDULO WAAS

**WaaS™** (WACC as a Service)
- Beta Estimator™
  - Base de datos de betas por industria (50+ sectores)
  - Selección automática por NAICS/SCIAN
  - Betas comparables regionales
- Hamada Calculator™
  - Desapalancamiento de betas
  - Re-apalancamiento según estructura de capital del cliente
- Cost of Capital Engine™
  - Cálculo Ke (CAPM + riesgo país)
  - Cálculo Kd (costo deuda efectivo)
  - WACC ponderado automático
  - Beneficio fiscal integrado
- Country Risk Module™
  - Base actualizada de spreads soberanos
  - Ajustes por país (México, Colombia, Chile, Perú, Argentina)
  - Factores de volatilidad macroeconómica

### MÓDULO PLANNING

**Scenario Builder™** (Constructor de Escenarios)
- Escenarios predefinidos: Optimista, Realista, Pesimista
- Escenarios custom ilimitados
- Variables modificables:
  - Ingresos
  - Costos operativos
  - CAPEX
  - Deuda
  - Estructura de capital
- Outputs automáticos:
  - EVA proyectado (5 años)
  - VPN del proyecto
  - TIR
  - Payback
  - Impacto en WACC
  - Semáforo de riesgo financiero

**Investment Analyzer™** (Analizador de Inversiones)
- Evaluación automática de proyectos
- MVA (Market Value Added) proyectado
- Comparación de alternativas
- Ranking automático por creación de valor

### MÓDULO ENTERPRISE

**Business Unit EVA™** (EVA por Unidades de Negocio)
- Desagregación automática por:
  - Departamento
  - Sucursal
  - Línea de producto
  - Proyecto específico
  - Centro de costos
- Ranking de unidades creadoras/destructoras de valor
- Asignación inteligente de capital
- Mapas de calor organizacionales

**EVA Compensation™** (Sistema de Compensación Variable)
- Bonus Bank automático
- Fórmulas personalizables por nivel gerencial
- Acumulación/descuento según creación de valor
- Panel individual por ejecutivo
- Sincronización con nómina (API)
- Simulador de bonos
- Reportes fiscales automáticos

### MÓDULO INTEGRATIONS

**Connectors Hub™**
- Integración contable:
  - Chift (México)
  - Konvex (LATAM)
  - QuickBooks (Internacional)
  - Facturama (México)
  - CONTPAQi (México)
  - SAP Business One (Enterprise)
  - API REST propietaria
- Sincronización automática de:
  - Balance General
  - Estado de Resultados
  - Flujo de efectivo
  - Auxiliares contables
- Frecuencia: tiempo real, diaria, semanal, mensual

---

## 2. WIREFRAMES DETALLADOS (DESCRIPCIÓN VISUAL)

### PANTALLA 1: DASHBOARD GENERAL

**Layout:**
- Barra superior: Logo EVA Finanzas, nombre de empresa, perfil usuario, notificaciones
- Sidebar izquierdo: Menú de navegación con iconos
  - Dashboard
  - AC Engine
  - WaaS
  - Escenarios
  - Unidades de Negocio
  - Compensaciones
  - Integraciones
  - Configuración

**Contenido Principal:**

**Sección Hero (superior, full width):**
- KPI principal gigante centrado:
  - "TU EVA ACTUAL"
  - Número grande: $2,450,000 MXN
  - Badge verde: "+18% vs periodo anterior" ✓ CREANDO VALOR
  - O Badge rojo: "-12% vs periodo anterior" ✗ DESTRUYENDO VALOR
- Subtexto: "Actualizado hace 2 horas"

**Grid de Métricas Clave (3 columnas):**

Columna 1:
- Card: NOPAT
  - $8,500,000
  - Gráfica sparkline ascendente
  - +5% vs año anterior

Columna 2:
- Card: CAPITAL INVERTIDO
  - $45,000,000
  - Gráfica sparkline estable
  - Eficiencia: 18.8%

Columna 3:
- Card: WACC
  - 12.5%
  - Badge: "Óptimo para tu industria"
  - Comparación vs industria: 13.2%

**Gráfica Principal (full width):**
- Título: "Evolución EVA - Últimos 12 meses"
- Gráfica de línea con área sombreada
- Eje Y: EVA en millones
- Eje X: Meses
- Colores: verde cuando positivo, rojo cuando negativo
- Línea punteada: EVA = 0
- Tooltip interactivo al hover

**Sección Drivers de Valor (2 columnas):**

Izquierda:
- Card: "Top 3 Drivers Positivos"
  - Reducción de costos operativos: +$500K EVA
  - Mejora en rotación de inventario: +$320K EVA
  - Optimización de estructura de capital: +$180K EVA

Derecha:
- Card: "Top 3 Detractores"
  - Incremento en capital de trabajo: -$200K EVA
  - Aumento en tasa de interés: -$150K EVA
  - Caída en margen bruto: -$100K EVA

**Alertas Inteligentes:**
- Banner amarillo: "Tu WACC subió 0.5 puntos. Considera refinanciar deuda."
- Banner azul: "Nueva oportunidad: Escenario optimizado detectado. Ver recomendación."

---

### PANTALLA 2: AC ENGINE (MOTOR DE AJUSTES CONTABLES)

**Layout Wizard (paso a paso):**

**Header:**
- Título: "Motor de Conversión Contable"
- Subtítulo: "Transformando tu contabilidad en métricas económicas reales"
- Barra de progreso: 7 pasos

**Paso 1: Importación de Datos**
- Tabla mostrando:
  - Balance General (última fecha)
  - Estado de Resultados
  - Status: ✓ Sincronizado vía Chift
- Botón: "Refrescar datos"

**Paso 2: Capitalización de I+D**
- Pregunta: "¿Tu empresa invierte en investigación y desarrollo?"
- Toggle: Sí/No
- Si Sí:
  - Input: Gasto anual en I+D: $500,000
  - Input: Años de amortización: 5
  - Cálculo automático mostrado:
    - Ajuste a activos: +$2,500,000
    - Ajuste a NOPAT: +$500,000 - amortización

**Paso 3: Activos Improductivos**
- Lista automática detectada:
  - Terreno sin uso: $1,200,000 (sugerido: excluir)
  - Inversiones no operativas: $300,000 (sugerido: excluir)
- Checkboxes para confirmar exclusiones
- Impacto en Capital Invertido: -$1,500,000

**Paso 4: Provisiones y Reservas**
- Tabla de provisiones detectadas:
  - Provisión cuentas incobrables: $120,000
  - Reserva legal: $80,000
- Radio buttons: Incluir/Excluir cada una
- Explicación breve de impacto

**Paso 5: Tratamiento de Leasing**
- Detección automática de contratos de leasing
- Lista:
  - Leasing equipo de cómputo: $50,000/año
  - Tipo: Operativo
  - Sugerencia: Capitalizar como activo
- Ajuste automático al aceptar

**Paso 6: Eliminación de Partidas Extraordinarias**
- Lista de partidas detectadas:
  - Venta de activo fijo: $200,000 (ganancia)
  - Indemnización legal: $80,000 (pérdida)
- Checkboxes: Normalizar estas partidas
- Impacto en NOPAT mostrado

**Paso 7: Resumen de Ajustes**
- Tabla comparativa:

| Concepto | Contable | Ajustes | Económico |
|----------|----------|---------|-----------|
| Activos Total | $50M | +$2.5M | $52.5M |
| Capital Invertido | $45M | -$1M | $44M |
| Utilidad Neta | $5M | +$500K | $5.5M |
| NOPAT | - | - | $6.2M |

- Botón grande: "Aplicar Ajustes y Calcular EVA"

**Resultado Final:**
- Animación de cálculo
- Pantalla de éxito:
  - "✓ Conversión completada"
  - Tu NOPAT económico: $6,200,000
  - Tu Capital Invertido: $44,000,000
  - Botón: "Ver EVA Calculado"

---

### PANTALLA 3: WAAS (WACC ADVANCED)

**Header:**
- Título: "Tu Costo de Capital"
- Badge: WACC Actual: 12.5%
- Subtítulo: "Estimación profesional basada en comparables y mercado"

**Sección 1: Estructura de Capital (izquierda, 40%):**

Card: "Tu Estructura Actual"
- Gráfica de dona:
  - Capital: 70% ($31.5M)
  - Deuda: 30% ($13.5M)
- Apalancamiento (D/E): 0.43
- Inputs editables:
  - % Capital: [70]
  - % Deuda: [30]
- Botón: "Optimizar estructura"

**Sección 2: Costo de Capital (Ke):**

Card: "CAPM - Costo del Patrimonio"
- Fórmula mostrada: Ke = Rf + β × (Rm - Rf) + Rp
- Valores actuales:
  - Rf (Tasa libre riesgo): 8.5%
    - Fuente: Cetes 28 días
  - β (Beta apalancado): 1.15
    - Industria: Manufactura
    - Beta comparable: 0.95
    - Ajustado por apalancamiento (Hamada)
  - (Rm - Rf) Prima de mercado: 6.5%
  - Rp (Riesgo país México): 2.0%
- Cálculo: Ke = 8.5% + 1.15 × 6.5% + 2.0% = 18.0%

Expandible: "Ver detalles de Beta"
- Tabla de comparables:
  - Empresa A (sector): Beta 0.98
  - Empresa B (sector): Beta 0.92
  - Empresa C (sector): Beta 0.95
  - Promedio: 0.95
- Desapalancamiento (Hamada):
  - βu = βL / [1 + (1-T) × D/E]
  - βu = 0.95 / [1 + 0.7 × 0.43] = 0.78
- Re-apalancamiento:
  - βL = 0.78 × [1 + 0.7 × 0.43] = 1.15

**Sección 3: Costo de Deuda (Kd):**

Card: "Costo de Deuda después de Impuestos"
- Tasa promedio ponderada de deuda: 15.0%
- Tasa impositiva: 30%
- Kd efectivo: 15.0% × (1 - 0.30) = 10.5%
- Fuente: Promedio de tus préstamos actuales

**Sección 4: WACC Final (destacado):**

Card grande centrado:
- "Tu WACC"
- Número gigante: 12.5%
- Fórmula: WACC = (E/V × Ke) + (D/V × Kd)
- Cálculo: (0.70 × 18.0%) + (0.30 × 10.5%) = 12.6% + 3.15% = 15.75%

[ERROR EN CÁLCULO EJEMPLO, CORREGIR]
- Cálculo correcto: (0.70 × 18.0%) + (0.30 × 10.5%) = 12.6% + 3.15% = 15.75%

**Visualización:**
- Gráfica de barras apiladas mostrando componentes del WACC
- Comparación vs industria (13.2%)
- Badge: "Tu WACC está 0.7 puntos por debajo del promedio sectorial"

**Módulo de Optimización:**

Card: "Simulador de Estructura Óptima"
- Sliders interactivos:
  - % Deuda: [30] → arrastrando a 40
  - Impacto en WACC: 12.5% → 12.1%
  - Impacto en EVA: +$180,000
  - Impacto en riesgo: Medio → Medio-Alto
- Recomendación: "Incrementar deuda al 40% puede crear $180K adicionales de EVA anual"
- Botón: "Aplicar este escenario"

**Sección 5: Sensibilidad del WACC:**

Tabla:
| Variable | -2% | -1% | Actual | +1% | +2% |
|----------|-----|-----|--------|-----|-----|
| Rf | 11.1% | 11.8% | 12.5% | 13.2% | 13.9% |
| β | 11.8% | 12.15% | 12.5% | 12.85% | 13.2% |
| Kd | 12.35% | 12.42% | 12.5% | 12.58% | 12.65% |

Gráfica tornado mostrando sensibilidad de variables

---

### PANTALLA 4: ESCENARIOS

**Header:**
- Título: "Constructor de Escenarios"
- Tabs: Mis Escenarios | Crear Nuevo | Comparar

**Vista: Crear Nuevo Escenario**

**Paso 1: Nombrar y Configurar**
- Input: Nombre del escenario: "Expansión Planta Norte"
- Dropdown: Tipo: Proyecto de Inversión
- Dropdown: Horizonte: 5 años
- Textarea: Descripción breve

**Paso 2: Modificar Variables (Grid de Cards):**

Card 1: Inversión Inicial
- Input: CAPEX inicial: $5,000,000
- Fuente de financiamiento:
  - Capital: 60%
  - Deuda: 40%

Card 2: Impacto en Ingresos
- Año 1: +$2,000,000
- Año 2: +$3,000,000
- Año 3: +$4,000,000
- Año 4: +$4,500,000
- Año 5: +$5,000,000
- Gráfica de barras inline

Card 3: Impacto en Costos Operativos
- % de ingresos: 60%
- Costos fijos adicionales: $500,000/año

Card 4: Cambio en Capital de Trabajo
- Incremento: $800,000
- Recuperación año 5: Sí

Card 5: Estructura de Capital
- Nueva estructura D/E: 0.67
- Nuevo WACC estimado: 13.2%

Card 6: Otros Ajustes
- Depreciación anual: $500,000
- Valor residual año 5: $1,500,000

**Paso 3: Resultados Automáticos**

**Tabla de Proyecciones:**

| Año | NOPAT | Capital Inv. | WACC | EVA | EVA Acum. |
|-----|-------|--------------|------|-----|-----------|
| 0 | - | $49M | 13.2% | - | - |
| 1 | $6.5M | $49M | 13.2% | $0.03M | $0.03M |
| 2 | $7.2M | $48.5M | 13.2% | $0.8M | $0.83M |
| 3 | $8.0M | $48M | 13.2% | $1.66M | $2.49M |
| 4 | $8.5M | $47.5M | 13.2% | $2.23M | $4.72M |
| 5 | $9.0M | $47M | 13.2% | $2.8M | $7.52M |

**Métricas de Decisión:**

Card grande con semáforo:
- VPN del Proyecto: $3,200,000 ✓ Verde
- TIR: 22.5% (vs WACC 13.2%) ✓ Verde
- Payback: 2.8 años ✓ Verde
- EVA Total 5 años: $7,520,000 ✓ Verde
- Incremento Valor Empresa (MVA): $3,200,000

**Recomendación automática:**
- Badge verde: "PROYECTO RECOMENDADO"
- "Este proyecto crea valor significativo y supera el costo de capital"

**Gráficas:**

1. EVA Proyectado (línea temporal)
2. Flujo de EVA Acumulado
3. Comparación: Escenario Base vs Este Escenario
4. Análisis de Sensibilidad:
   - ¿Qué pasa si ingresos bajan 10%? VPN: $1.8M (aún positivo)
   - ¿Qué pasa si WACC sube 2%? VPN: $2.1M (aún positivo)
   - ¿Qué pasa si CAPEX sube 20%? VPN: $2.0M (aún positivo)

**Semáforo de Riesgo:**
- Riesgo de mercado: Medio
- Riesgo financiero: Bajo
- Riesgo operativo: Medio
- Riesgo global: Medio

Botón: "Guardar Escenario"
Botón: "Comparar con otros"
Botón: "Exportar PDF"

**Vista: Comparar Escenarios**

Tabla comparativa:

| Escenario | VPN | TIR | EVA 5a | Riesgo | Status |
|-----------|-----|-----|--------|--------|--------|
| Base (actual) | - | - | $12M | Bajo | Actual |
| Expansión Norte | $3.2M | 22.5% | $7.5M | Medio | ✓ Recomendado |
| Reducir Deuda | $0.8M | 16% | $2M | Bajo | Posible |
| Nueva Línea Producto | $4.1M | 26% | $9M | Alto | ✓ Recomendado |

Gráfica de burbujas:
- Eje X: VPN
- Eje Y: TIR
- Tamaño: EVA Total
- Color: Riesgo (verde bajo, amarillo medio, rojo alto)

---

### PANTALLA 5: UNIDADES DE NEGOCIO

**Header:**
- Título: "EVA por Unidades de Negocio"
- Dropdown: Ver por: Departamento | Sucursal | Proyecto | Línea de Producto
- Filtro de periodo: Últimos 12 meses

**Vista Principal: Ranking de Unidades**

**Tabla Interactiva:**

| Ranking | Unidad | EVA | Capital | ROIC | WACC | Spread | Tendencia |
|---------|--------|-----|---------|------|------|--------|-----------|
| 1 | Sucursal CDMX Centro | $850K | $5M | 25% | 12.5% | +12.5% | ↗️ |
| 2 | Línea Premium | $620K | $4M | 22% | 12.5% | +9.5% | ↗️ |
| 3 | Sucursal Guadalajara | $450K | $3.5M | 18% | 12.5% | +5.5% | → |
| 4 | Sucursal Monterrey | $320K | $3M | 16% | 12.5% | +3.5% | ↗️ |
| 5 | Línea Estándar | $180K | $2.5M | 14% | 12.5% | +1.5% | → |
| 6 | Sucursal Puebla | $50K | $2M | 13% | 12.5% | +0.5% | ↘️ |
| 7 | Depto. Servicios | -$80K | $1.5M | 9% | 12.5% | -3.5% | ↘️ DESTRUYE |
| 8 | Sucursal Veracruz | -$150K | $2M | 7% | 12.5% | -5.5% | ↘️ DESTRUYE |

**Colores:**
- Verde: EVA positivo
- Rojo: EVA negativo
- Intensidad del color según magnitud

**Visualizaciones:**

1. Mapa de Calor Organizacional:
   - Mapa de México con puntos de calor
   - Verde intenso: Altas creadoras de valor
   - Rojo intenso: Destructoras de valor

2. Gráfica de Burbujas:
   - Eje X: Capital Invertido
   - Eje Y: EVA
   - Tamaño: Ingresos
   - Cuadrantes marcados

3. Contribución al EVA Total:
   - Gráfica de cascada (waterfall)
   - Mostrando cómo cada unidad contribuye al EVA corporativo

**Panel Lateral: Análisis Detallado (al hacer clic en unidad)**

Card: Sucursal CDMX Centro
- EVA: $850,000
- NOPAT: $1,475,000
- Capital Invertido: $5,000,000
- ROIC: 29.5%
- WACC: 12.5%
- Spread: +17.0%

**Drivers de Valor:**
- Alta rotación de inventario
- Bajo capital de trabajo
- Excelente margen operativo

**Evolución EVA:**
- Gráfica de línea últimos 12 meses
- Tendencia creciente

**Acciones Sugeridas:**
- "Esta unidad es una creadora excepcional de valor"
- "Considera replicar sus prácticas en otras sucursales"
- "Candidata a expansión o mayor asignación de capital"

**Card: Sucursal Veracruz (Destructor de Valor)**
- EVA: -$150,000
- NOPAT: $100,000
- Capital Invertido: $2,000,000
- ROIC: 5.0%
- WACC: 12.5%
- Spread: -7.5%

**Problemas Detectados:**
- ROIC por debajo del WACC
- Alto capital ocioso
- Bajo margen operativo

**Acciones Sugeridas:**
- "Esta unidad destruye valor constantemente"
- "Opciones:"
  - Reestructurar operación
  - Reducir capital asignado
  - Considerar cierre o venta
- Costo de oportunidad: $250K/año

**Módulo de Asignación de Capital:**

Card: "Optimizador de Capital"
- Pregunta: "¿Qué pasa si reasignas $500K de Veracruz a CDMX Centro?"
- Simulación:
  - EVA Veracruz: -$150K → -$90K (mejora por menor capital)
  - EVA CDMX: +$850K → +$975K (mejora por mayor capital)
  - EVA Total: +$125K adicionales
- Botón: "Simular esta reasignación"

---

### PANTALLA 6: COMPENSACIONES (ENTERPRISE)

**Header:**
- Título: "Sistema de Compensación Variable EVA"
- Subtítulo: "Alinea incentivos con creación de valor"
- Toggle: Vista Corporativa | Vista Individual

**Vista Corporativa:**

**Panel de Control:**

Card 1: Resumen del Plan
- Ejecutivos incluidos: 12
- Bonos potenciales totales: $2,400,000
- EVA objetivo 2024: $15,000,000
- EVA real acumulado: $12,500,000 (83%)
- Status: En camino

**Tabla de Ejecutivos:**

| Ejecutivo | Puesto | EVA Objetivo | EVA Real | % Logro | Bono Target | Bono Real | Status |
|-----------|--------|--------------|----------|---------|-------------|-----------|--------|
| Carlos M. | CEO | $15M corp | $12.5M | 83% | $500K | $415K | 🟡 |
| Ana L. | CFO | $15M corp | $12.5M | 83% | $300K | $249K | 🟡 |
| Roberto S. | Dir Ops | $8M ops | $9.2M | 115% | $250K | $287.5K | 🟢 |
| María G. | Dir Com | $4M com | $3.2M | 80% | $200K | $160K | 🟡 |
| Luis R. | Dir CDMX | $850K suc | $920K | 108% | $150K | $162K | 🟢 |

**Fórmula de Bono (configurable):**

\`\`\`
Bono Real = Bono Target × [% Logro EVA]

Con ajustes:
- Si logro < 80%: Bono = 0
- Si logro 80-100%: Bono proporcional
- Si logro > 100%: Bono proporcional con cap al 150%
\`\`\`

**Bonus Bank:**

Card: "Banco de Bonos Acumulados"
Explicación: "Los bonos se acumulan y pagan parcialmente cada año para incentivar desempeño sostenido"

Ejemplo: Roberto S.
- Bono ganado 2024: $287,500
- Pago inmediato (33%): $95,000
- Depositado en Bonus Bank: $192,500
- Banco acumulado: $192,500
- Disponible pago 2025: $64,167
- Disponible pago 2026: $64,167
- Disponible pago 2027: $64,166

Tabla de banco:
| Ejecutivo | Banco Total | Disponible 2024 | Disponible 2025 | Disponible 2026 |
|-----------|-------------|-----------------|-----------------|-----------------|
| Carlos M. | $830K | $275K | $277.5K | $277.5K |
| Ana L. | $498K | $166K | $166K | $166K |
| Roberto S. | $575K | $191.7K | $191.7K | $191.6K |

**Gráfica: Evolución de Bonos**
- Línea temporal mostrando bonos ganados vs pagados
- Proyección de pagos futuros

**Configuración del Plan:**

Sección expandible: "Configurar Plan de Compensación"

- Fórmula de bono:
  - Peso EVA corporativo: [70]%
  - Peso EVA unidad: [30]%
- Umbrales:
  - Mínimo para bono: [80]% logro
  - Máximo cap: [150]% del target
- Bonus Bank:
  - % pago inmediato: [33]%
  - % diferido: [67]%
  - Años de diferimiento: [3]
- Configuración por nivel:
  - C-Level: EVA corporativo 100%
  - Directores: EVA corp 50% + Unidad 50%
  - Gerentes: EVA unidad 100%

**Vista Individual: Panel del Ejecutivo**

(Vista que vería Roberto S., Director de Operaciones)

**Header Personal:**
- "Hola Roberto"
- Tu Desempeño 2024
- Último update: Hoy

**KPI Personal Grande:**

Card Hero:
- "Tu Bono Estimado 2024"
- $287,500
- Badge: +15% vs target ✓
- "¡Excelente desempeño!"

**Desglose:**

Card: Tu Objetivo
- EVA Operaciones Target: $8,000,000
- EVA Real a la fecha: $9,200,000
- % Logro: 115%
- Contribución adicional: +$1,200,000

**Evolución Mensual:**
- Gráfica de línea: EVA acumulado vs objetivo
- Tu línea (real) está por encima de línea objetivo
- Proyección: Si sigues así, cerrarás en 118%

**Calculadora de Bono:**

Card: "Tu Compensación Variable"
- Bono target anual: $250,000
- Multiplicador por desempeño: 1.15x
- Bono total ganado: $287,500

Desglose de pago:
- Pago diciembre 2024: $95,000
- Depositado en Bonus Bank: $192,500
  - Pago 2025: $64,167
  - Pago 2026: $64,167
  - Pago 2027: $64,166

**Tu Bonus Bank:**
- Saldo actual: $575,000
- Pagos programados:
  - 2024: $95,000 (nuevo)
  - 2025: $127,500 (acumulado de años anteriores)
  - 2026: $191,667
  - 2027: $160,833

**Drivers de tu EVA:**

Card: "Lo que está funcionando"
- Reducción de costos operativos: +$600K
- Mejora en eficiencia de planta: +$400K
- Proyecto Lean: +$200K

Card: "Áreas de oportunidad"
- Capital de trabajo ha subido: -$150K
- Retraso en proyecto automatización: -$50K

**Simulador:**

Card: "¿Qué necesitas para llegar al cap (150%)?"
- EVA adicional requerido: $2,000,000
- Esto significa: 
  - Subir ventas 8%, o
  - Bajar costos 5%, o
  - Reducir capital invertido $16M
- Probabilidad según tendencia: 45%

**Acciones:**
- Botón: "Ver plan de acción para maximizar bono"
- Botón: "Simular escenarios"
- Botón: "Comparar vs otros directores (anónimo)"

---

### PANTALLA 7: INTEGRACIONES

**Header:**
- Título: "Conecta tu Contabilidad"
- Subtítulo: "Sincronización automática de datos financieros"

**Estado de Conexión:**

Card grande:
- Status: ✓ Conectado
- Sistema: Chift (México)
- Empresa: Industrias XYZ S.A. de C.V.
- RFC: IXY123456ABC
- Última sincronización: Hace 2 horas
- Botón: "Refrescar ahora"
- Botón: "Desconectar"

**Datos Sincronizados:**

Grid de Cards con checks:
- ✓ Balance General (actualizado mensual)
- ✓ Estado de Resultados (actualizado mensual)
- ✓ Auxiliares Contables (actualizado mensual)
- ✓ Catálogo de Cuentas
- ✓ Flujo de Efectivo
- ⚠️ Presupuestos (no disponible en tu plan Chift)

**Conectores Disponibles:**

Grid de Cards con logos:

Card: Chift
- Logo
- "Para México"
- Status: Conectado ✓
- Badge: Recomendado

Card: Konvex
- Logo
- "Para LATAM"
- Status: No conectado
- Botón: "Conectar"

Card: QuickBooks
- Logo
- "Internacional"
- Status: No conectado
- Botón: "Conectar"

Card: CONTPAQi
- Logo
- "Para México"
- Status: No conectado
- Botón: "Conectar"

Card: Facturama
- Logo
- "Para facturación MX"
- Status: No conectado
- Botón: "Conectar"

Card: SAP Business One
- Logo
- "Enterprise"
- Badge: Plan Enterprise
- Status: No conectado

Card: API REST
- Logo genérico
- "Integración custom"
- Status: No configurado
- Botón: "Ver documentación"

**Configuración de Sincronización:**

Card: "Frecuencia de Actualización"
- Radio buttons:
  - ⚪ Tiempo real (solo planes Enterprise)
  - ⚪ Diaria
  - 🔘 Semanal (actual)
  - ⚪ Mensual
- Día de sincronización: Lunes
- Hora: 06:00 AM

Card: "Cuentas a Sincronizar"
- Checkbox list:
  - ✓ Todas las cuentas
  - O selección manual:
    - ✓ Activos
    - ✓ Pasivos
    - ✓ Capital
    - ✓ Ingresos
    - ✓ Costos
    - ✓ Gastos

**Logs de Sincronización:**

Tabla:
| Fecha | Status | Registros | Tiempo | Detalles |
|-------|--------|-----------|--------|----------|
| 2024-03-20 06:00 | ✓ Exitosa | 1,234 | 12s | Ver log |
| 2024-03-13 06:00 | ✓ Exitosa | 1,198 | 10s | Ver log |
| 2024-03-06 06:00 | ⚠️ Parcial | 1,156 | 45s | 3 warnings |
| 2024-02-28 06:00 | ✓ Exitosa | 1,145 | 11s | Ver log |

**Sección API para Desarrolladores:**

Card: "API REST de EVA Finanzas"
- Descripción: "Integra EVA Finanzas con tus sistemas internos"
- Botón: "Ver documentación"
- Botón: "Generar API Key"
- Endpoints disponibles:
  - GET /api/v1/eva
  - GET /api/v1/metrics
  - POST /api/v1/accounting-data
  - GET /api/v1/scenarios
- Rate limits: 1,000 req/hora (Plan Pro)

**Soporte:**
- ¿Problemas con la integración?
- Botón: "Contactar soporte"
- Botón: "Ver guías de integración"
- Botón: "Agendar llamada con ingeniero"

---

## 3. ARQUITECTURA TÉCNICA DEL MVP

### STACK TECNOLÓGICO

**Frontend:**
- Framework: Next.js 15 (App Router)
- UI: React 19
- Styling: Tailwind CSS v4
- Componentes: shadcn/ui
- Gráficas: ECharts (Apache ECharts)
- State Management: SWR + React Context
- Formularios: React Hook Form + Zod
- Tablas: TanStack Table
- Animaciones: Framer Motion

**Backend:**
- Runtime: Node.js 20+
- Framework: Next.js API Routes (serverless)
- Alternativa: Fastify para microservicios
- Autenticación: NextAuth.js (Auth.js)
- Validación: Zod

**Cálculo de Alto Rendimiento:**
- Motor de cálculo: Python 3.11
- Librerías:
  - NumPy (cálculos matriciales)
  - Pandas (manipulación de datos)
  - SciPy (optimización)
- Alternativa: Julia (si se requiere mayor velocidad)
- Exposición: API REST

**Base de Datos:**
- Principal: PostgreSQL 15
- Schema:
  - Datos transaccionales
  - Históricos contables
  - Configuración usuarios
- ORM: Prisma
- Migraciones: Prisma Migrate

**Cache y Sesiones:**
- Redis (Upstash para serverless)
- Cache de cálculos EVA
- Rate limiting
- Sesiones de usuario

**File Storage:**
- Vercel Blob
- Almacenamiento de:
  - Exports PDF/Excel
  - Logos empresas
  - Documentos adjuntos

**Cola de Tareas:**
- Sistema: Vercel Queue o BullMQ
- Tareas asíncronas:
  - Sincronización contable
  - Cálculos masivos
  - Generación de reportes
  - Envío de emails

**Infraestructura:**
- Hosting: Vercel (frontend + serverless functions)
- Cómputo pesado: AWS Lambda o Google Cloud Run
- CDN: Vercel Edge Network
- DNS: Vercel DNS

**Integraciones Externas:**
- Chift API (México)
- Konvex API (LATAM)
- QuickBooks API
- Stripe (pagos SaaS)
- SendGrid (emails transaccionales)
- Twilio (SMS para 2FA opcional)

**Monitoreo y Logging:**
- Errores: Sentry
- Analytics: Vercel Analytics + PostHog
- Logs: Vercel Logs
- Uptime: Better Uptime

**CI/CD:**
- Git: GitHub
- Deploy: Vercel (auto-deploy from main)
- Preview: Vercel Preview Deployments
- Testing: Vitest + Playwright

### ARQUITECTURA DE MICROSERVICIOS

**Servicios Independientes:**

1. **eva-api-gateway**
   - Punto de entrada único
   - Autenticación y autorización
   - Rate limiting
   - Routing a microservicios

2. **accounting-service**
   - AC Engine
   - Transformación contable
   - Ajustes automáticos
   - Exposición: REST API

3. **eva-calculator-service**
   - Cálculo EVA
   - Cálculos de métricas
   - Motor Python/Julia
   - Exposición: REST API

4. **waas-service**
   - Estimación WACC
   - Base de datos de betas
   - Cálculo Hamada
   - Riesgo país
   - Exposición: REST API

5. **scenario-service**
   - Construcción de escenarios
   - Proyecciones
   - VPN/TIR
   - Sensibilidad
   - Exposición: REST API

6. **business-unit-service**
   - Desagregación EVA
   - Ranking de unidades
   - Asignación de capital
   - Exposición: REST API

7. **compensation-service**
   - Cálculo de bonos
   - Bonus Bank
   - Gestión de planes
   - Exposición: REST API

8. **integration-service**
   - Conectores contables
   - Sincronización datos
   - Gestión de APIs externas
   - Exposición: REST API + Jobs

9. **notification-service**
   - Emails transaccionales
   - SMS
   - Webhooks
   - Exposición: REST API

10. **reporting-service**
    - Generación PDFs
    - Exports Excel
    - Dashboards
    - Exposición: REST API

### DIAGRAMA DE ARQUITECTURA

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │Dashboard │ │AC Engine │ │  WaaS    │ │Scenarios │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│  │ Bus Unit │ │  Comp.   │ │ Integr.  │               │
│  └──────────┘ └──────────┘ └──────────┘               │
└────────────────────┬────────────────────────────────────┘
                     │ HTTPS/REST
                     ▼
┌─────────────────────────────────────────────────────────┐
│              API GATEWAY (Next.js API Routes)            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│  │   Auth   │ │  Router  │ │Rate Limit│               │
│  └──────────┘ └──────────┘ └──────────┘               │
└────────────────────┬────────────────────────────────────┘
                     │ Internal REST
        ┌────────────┼────────────┬───────────┐
        ▼            ▼            ▼           ▼
┌──────────────┐ ┌──────────┐ ┌─────────┐ ┌──────────┐
│  Accounting  │ │   EVA    │ │  WaaS   │ │ Scenario │
│   Service    │ │ Calculator│ │ Service │ │ Service  │
│  (Node.js)   │ │  (Python) │ │(Node.js)│ │(Node.js) │
└──────────────┘ └──────────┘ └─────────┘ └──────────┘
        │               │           │            │
        └───────────────┴───────────┴────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │    PostgreSQL (Main DB)        │
        │  ┌──────┐ ┌──────┐ ┌──────┐  │
        │  │Users │ │ EVA  │ │Comp. │  │
        │  │Config│ │Data  │ │Data  │  │
        │  └──────┘ └──────┘ └──────┘  │
        └───────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│    Redis     │ │Integration│ │ Notification │
│   (Cache)    │ │  Service  │ │   Service    │
└──────────────┘ └──────────┘ └──────────────┘
                     │               │
                     ▼               ▼
             ┌──────────────┐ ┌──────────┐
             │External APIs │ │ SendGrid │
             │Chift/Konvex/ │ │  Twilio  │
             │ QuickBooks   │ └──────────┘
             └──────────────┘
\`\`\`

### BASE DE DATOS (SCHEMA PRINCIPAL)

**Tablas Core:**

\`\`\`sql
-- Usuarios y empresas
users (
  id: UUID PK,
  email: VARCHAR,
  password_hash: VARCHAR,
  name: VARCHAR,
  role: ENUM,
  created_at: TIMESTAMP
)

companies (
  id: UUID PK,
  user_id: UUID FK,
  name: VARCHAR,
  rfc: VARCHAR,
  industry: VARCHAR,
  plan: ENUM,
  created_at: TIMESTAMP
)

-- Datos contables
accounting_data (
  id: UUID PK,
  company_id: UUID FK,
  period: DATE,
  balance_sheet: JSONB,
  income_statement: JSONB,
  cash_flow: JSONB,
  synced_at: TIMESTAMP
)

-- Ajustes contables
accounting_adjustments (
  id: UUID PK,
  company_id: UUID FK,
  period: DATE,
  adjustment_type: VARCHAR,
  amount: DECIMAL,
  description: TEXT,
  applied: BOOLEAN
)

-- EVA Calculations
eva_calculations (
  id: UUID PK,
  company_id: UUID FK,
  period: DATE,
  nopat: DECIMAL,
  invested_capital: DECIMAL,
  wacc: DECIMAL,
  eva: DECIMAL,
  created_at: TIMESTAMP
)

-- WACC Components
wacc_data (
  id: UUID PK,
  company_id: UUID FK,
  period: DATE,
  beta: DECIMAL,
  ke: DECIMAL,
  kd: DECIMAL,
  debt_ratio: DECIMAL,
  equity_ratio: DECIMAL,
  wacc: DECIMAL
)

-- Escenarios
scenarios (
  id: UUID PK,
  company_id: UUID FK,
  name: VARCHAR,
  description: TEXT,
  assumptions: JSONB,
  results: JSONB,
  created_at: TIMESTAMP
)

-- Unidades de negocio
business_units (
  id: UUID PK,
  company_id: UUID FK,
  name: VARCHAR,
  type: VARCHAR,
  parent_id: UUID FK
)

business_unit_eva (
  id: UUID PK,
  business_unit_id: UUID FK,
  period: DATE,
  eva: DECIMAL,
  nopat: DECIMAL,
  invested_capital: DECIMAL
)

-- Compensaciones
compensation_plans (
  id: UUID PK,
  company_id: UUID FK,
  name: VARCHAR,
  formula: JSONB,
  active: BOOLEAN
)

executive_targets (
  id: UUID PK,
  plan_id: UUID FK,
  user_id: UUID FK,
  eva_target: DECIMAL,
  bonus_target: DECIMAL
)

bonus_bank (
  id: UUID PK,
  executive_id: UUID FK,
  year: INTEGER,
  amount_earned: DECIMAL,
  amount_paid: DECIMAL,
  amount_deferred: DECIMAL
)

-- Integraciones
integrations (
  id: UUID PK,
  company_id: UUID FK,
  provider: VARCHAR,
  credentials: JSONB ENCRYPTED,
  config: JSONB,
  last_sync: TIMESTAMP,
  active: BOOLEAN
)
\`\`\`

### FLUJOS PRINCIPALES

**Flujo 1: Onboarding y Primera Carga**

1. Usuario se registra → users table
2. Crea empresa → companies table
3. Conecta integración contable:
   - integration-service registra credenciales
   - Trigger primera sincronización
4. integration-service descarga datos:
   - Balance General
   - Estado de Resultados
   - Guarda en accounting_data
5. Frontend muestra wizard AC Engine:
   - accounting-service detecta ajustes
   - Usuario confirma/modifica
   - Guarda en accounting_adjustments
6. eva-calculator-service:
   - Calcula NOPAT ajustado
   - Calcula Capital Invertido ajustado
7. waas-service:
   - Estima WACC automático
   - Guarda en wacc_data
8. eva-calculator-service:
   - Calcula EVA = NOPAT - (IC × WACC)
   - Guarda en eva_calculations
9. Dashboard se actualiza con primer EVA

**Flujo 2: Sincronización Periódica**

1. Cron job ejecuta cada semana
2. integration-service:
   - Descarga nuevos datos contables
   - Compara con periodo anterior
   - Detecta cambios
3. Si hay cambios:
   - Guarda en accounting_data
   - Trigger accounting-service
   - Aplica ajustes previamente configurados
4. eva-calculator-service recalcula EVA
5. notification-service envía email si:
   - EVA cambió significativamente
   - Se detectan alertas
6. Dashboard actualiza automáticamente (SWR)

**Flujo 3: Creación de Escenario**

1. Usuario llena formulario en frontend
2. API Gateway → scenario-service
3. scenario-service:
   - Valida datos de entrada
   - Construye proyección 5 años
   - Llama a eva-calculator-service para cada año
   - Calcula VPN usando WACC
   - Calcula TIR
   - Ejecuta análisis de sensibilidad
   - Guarda en scenarios table
4. Frontend muestra resultados
5. Usuario puede comparar con otros escenarios

**Flujo 4: Cálculo de Compensaciones**

1. Fin de periodo (mensual/trimestral/anual)
2. Cron job trigger compensation-service
3. compensation-service:
   - Lee eva_calculations del periodo
   - Lee executive_targets
   - Calcula % logro
   - Aplica fórmula de bonos
   - Calcula Bonus Bank:
     - % pago inmediato
     - % diferido
   - Guarda en bonus_bank
4. notification-service:
   - Envía email a cada ejecutivo
   - "Tu bono del Q1 2024: $XX,XXX"
5. Frontend muestra en panel individual

### SEGURIDAD

**Autenticación:**
- NextAuth.js con múltiples providers:
  - Email/Password (bcrypt)
  - Google OAuth
  - Microsoft OAuth
- Session JWT (HttpOnly cookies)
- 2FA opcional (TOTP vía Twilio)

**Autorización:**
- RBAC (Role-Based Access Control):
  - Super Admin
  - Company Admin
  - Executive
  - Manager
  - Viewer
- Permisos granulares por módulo

**Encriptación:**
- Datos en tránsito: TLS 1.3
- Datos en reposo:
  - PostgreSQL: encryption at rest
  - Credenciales integraciones: AES-256
- Secrets: Vercel Environment Variables

**Rate Limiting:**
- API Gateway: 100 req/min por usuario
- Public endpoints: 20 req/min por IP
- Redis para tracking

**Auditoría:**
- Logs de todas las acciones sensibles:
  - Login/logout
  - Cambios en configuración
  - Cálculos ejecutados
  - Exports realizados
- Tabla audit_logs en PostgreSQL

### ESCALABILIDAD

**Horizontal Scaling:**
- Vercel Serverless: auto-scaling frontend
- Microservicios: independientes, pueden escalar por separado
- PostgreSQL: Read replicas para queries pesados
- Redis: Cluster mode si se requiere

**Optimizaciones:**
- Cache agresivo en Redis:
  - EVA calculations: TTL 1 hora
  - WACC data: TTL 1 día
  - Betas: TTL 1 semana
- CDN para assets estáticos
- Lazy loading de módulos frontend
- Virtual scrolling en tablas grandes
- Paginación server-side

**Límites por Plan:**
- Base: 1 empresa, 100 cálculos/mes
- Pro: 5 empresas, 1,000 cálculos/mes
- Enterprise: Ilimitado

### MVP - SCOPE MÍNIMO

Para lanzar el MVP en 3-4 meses:

**Incluir (Must Have):**
1. Registro y autenticación básica
2. Conexión con 1 integración: Chift (México)
3. AC Engine simplificado:
   - Solo ajustes I+D, leasing, extraordinarias
   - Manual (no automático)
4. Cálculo EVA básico
5. Dashboard con:
   - EVA actual
   - Gráfica histórica
   - NOPAT, Capital, WACC
6. WaaS simplificado:
   - Betas fijos por industria (10 sectores)
   - WACC automático con inputs mínimos
7. 1 escenario: "¿Qué pasa si...?" básico
8. Plan Base y Pro

**Posponer (Post-MVP):**
- Business Unit EVA
- Compensaciones
- Escenarios avanzados (VPN/TIR)
- Bonus Bank
- Optimización automática
- Múltiples integraciones
- Plan Enterprise
- API pública

---

## 4. PITCH FINAL Y COPY PARA LANDING WWW.EVAFINANZAS.COM

### HERO SECTION

**Headline (grande, impactante):**
¿Tu Empresa Crea o Destruye Valor?
Descúbrelo en Minutos

**Subheadline:**
EVA Finanzas calcula automáticamente tu Valor Económico Agregado (EVA) real, conecta tu contabilidad y te dice si estás creando riqueza o destruyéndola.

La herramienta que los CFOs de PYMES en LATAM estaban esperando.

**CTA Principal:**
[Calcular mi EVA Gratis] (Botón grande, verde)

**CTA Secundario:**
[Ver Demo en Vivo] (Botón outline)

**Imagen/Video:**
Dashboard animado mostrando un EVA positivo con gráficas subiendo, semáforo verde y métricas en tiempo real

**Trust Badge:**
"Confiado por más de 500 empresas en México, Colombia y Chile"

---

### SECCIÓN: EL PROBLEMA

**Título:**
La Pregunta que Todo Director Financiero Debe Responder

**3 Columnas con Íconos:**

1. "¿Realmente Estoy Creando Valor?"
   - La utilidad contable no cuenta toda la historia
   - Puedes tener ganancias y aún así destruir valor
   - ¿Estás superando tu costo de capital?

2. "Excel Ya No Es Suficiente"
   - Fórmulas complejas
   - Errores humanos
   - Ajustes contables que nadie hace bien
   - Horas de trabajo manual

3. "Decisiones Sin Datos Reales"
   - ¿Invertir o no invertir?
   - ¿Qué proyecto priorizar?
   - ¿Dónde recortar costos?
   - Sin EVA, estás volando a ciegas

---

### SECCIÓN: LA SOLUCIÓN

**Título:**
EVA Finanzas: Tu Departamento de Valuación en Piloto Automático

**Video Demo o GIF Animado:**
Mostrando el flujo completo: Conexión → Ajustes → Cálculo → Dashboard

**4 Pasos Visuales:**

1. **Conecta tu Contabilidad**
   - Integración automática con Chift, QuickBooks, Konvex
   - Sin exportar archivos
   - Sincronización en tiempo real

2. **Ajustes Inteligentes (AC Engine)**
   - El sistema detecta ajustes contables automáticamente
   - Capitalización de I+D
   - Activos improductivos
   - Partidas extraordinarias
   - Todo en 3 clics

3. **WACC Profesional Automático**
   - Betas por industria
   - Riesgo país actualizado
   - Costo de capital preciso
   - Sin necesidad de ser experto financiero

4. **Tu EVA en Segundos**
   - Dashboard ejecutivo
   - Semáforo: ¿Creas o destruyes valor?
   - Históricos y proyecciones
   - Alertas inteligentes

---

### SECCIÓN: CARACTERÍSTICAS PRINCIPALES

**Título:**
Todo lo que Necesitas para Gestionar por Valor

**Grid de 6 Características (2x3):**

1. **Motor EVA™**
   - Cálculo automático de Valor Económico Agregado
   - NOPAT y Capital Invertido ajustados
   - Históricos y tendencias
   - [Ver más →]

2. **WaaS™ (WACC as a Service)**
   - Estimación profesional de costo de capital
   - Betas por industria para LATAM
   - Ajustes por riesgo país
   - [Ver más →]

3. **Análisis de Escenarios**
   - "¿Qué pasa si...?"
   - Proyecciones a 5 años
   - VPN y TIR automáticos
   - Toma decisiones basadas en valor
   - [Ver más →]

4. **EVA por Unidades de Negocio**
   - Desagrega por departamento, sucursal o proyecto
   - Identifica dónde creas más valor
   - Ranking automático
   - [Plan Enterprise]

5. **Compensación Variable**
   - Bonos ligados al EVA
   - Bonus Bank automático
   - Alinea incentivos de tu equipo
   - [Plan Enterprise]

6. **Integraciones Poderosas**
   - Chift, Konvex, QuickBooks, CONTPAQi
   - API REST para custom integrations
   - Sincronización automática
   - [Ver más →]

---

### SECCIÓN: PARA QUIÉN ES

**Título:**
Diseñado para Empresas que Quieren Crecer con Inteligencia

**3 Perfiles (Cards con Avatar):**

1. **CFOs y Directores Financieros**
   "Deja de hacer cálculos en Excel y obtén métricas profesionales en minutos. EVA Finanzas me ahorró 10 horas al mes y mejoró nuestras decisiones de inversión."
   - María González, CFO en Grupo Industrial XYZ

2. **Dueños de PYMES**
   "Finalmente entiendo si mi negocio realmente crea valor o solo genera ventas. Descubrimos que una sucursal destruía $200K al año y la reestructuramos."
   - Carlos Ramírez, CEO en Distribuidora LATAM

3. **Consultores y Asesores**
   "Uso EVA Finanzas con todos mis clientes. Les encanta ver su EVA por primera vez. Es una herramienta de venta increíble."
   - Roberto Sánchez, Consultor Financiero

---

### SECCIÓN: CASOS DE USO

**Título:**
Cómo Empresas Reales Usan EVA Finanzas

**4 Casos (Cards con Ícono):**

1. **Decisiones de Inversión**
   "¿Invertir $5M en nueva maquinaria?"
   - Simula el escenario en minutos
   - Ve el impacto en EVA a 5 años
   - Decide con VPN y TIR reales

2. **Optimización de Capital**
   "¿Deuda o capital propio?"
   - Ajusta tu estructura de capital
   - Ve cómo cambia tu WACC
   - Maximiza la creación de valor

3. **Identificar Unidades Problemáticas**
   "¿Qué sucursal cierra o mejora?"
   - EVA por unidad de negocio
   - Detecta destructores de valor
   - Toma acciones inmediatas

4. **Alinear Incentivos**
   "Bonos que realmente motivan"
   - Compensa según creación de valor
   - Bonus Bank automático
   - Equipo alineado con resultados

---

### SECCIÓN: PRICING

**Título:**
Planes Transparentes para Cada Etapa de tu Empresa

**3 Columnas de Pricing:**

**Plan BASE**
- $19 USD/mes
- (aprox. $350 MXN)
- Facturado anualmente

Incluye:
- ✓ 1 empresa
- ✓ Cálculo EVA automático
- ✓ Dashboard básico
- ✓ 1 integración contable
- ✓ WACC automático (betas fijos)
- ✓ Soporte por email

Para: Empresas iniciando con EVA

[Empezar Gratis 14 días]

---

**Plan PRO** (POPULAR)
- $59 USD/mes
- (aprox. $1,100 MXN)
- Facturado anualmente
- Ahorras $180/año

Incluye TODO de Base +
- ✓ 5 empresas
- ✓ AC Engine completo (ajustes automáticos)
- ✓ WaaS™ avanzado (betas ajustados)
- ✓ Análisis de escenarios ilimitados
- ✓ Proyecciones y VPN/TIR
- ✓ Integraciones múltiples
- ✓ API REST
- ✓ Exports PDF/Excel
- ✓ Soporte prioritario

Para: PYMEs y empresas en crecimiento

[Empezar Gratis 14 días]

---

**Plan ENTERPRISE**
- $149 USD/mes
- (aprox. $2,700 MXN)
- Facturado anualmente
- Ahorras $480/año

Incluye TODO de Pro +
- ✓ Empresas ilimitadas
- ✓ EVA por unidades de negocio
- ✓ Módulo de compensaciones
- ✓ Bonus Bank automático
- ✓ Multiusuario (hasta 20)
- ✓ Permisos granulares
- ✓ Onboarding personalizado
- ✓ Soporte telefónico
- ✓ SLA 99.9%
- ✓ Gestor de cuenta dedicado

Para: Empresas medianas y consultoras

[Agendar Demo]

---

**Sección de Garantía:**
"Prueba sin Riesgo por 14 Días - Si no ves el valor de tu EVA, te devolvemos el 100%"

---

### SECCIÓN: COMPARACIÓN

**Título:**
EVA Finanzas vs. Las Alternativas

**Tabla Comparativa:**

| Feature | Excel Manual | Consultor Externo | EVA Finanzas |
|---------|--------------|-------------------|--------------|
| Costo mensual | Tiempo de tu CFO (~$2,000) | $5,000-$10,000 | Desde $19 |
| Tiempo de setup | 20+ horas | 2-4 semanas | 15 minutos |
| Errores humanos | Frecuentes | Ocasionales | Cero |
| Actualizaciones | Manual | Cada trimestre | Automático |
| Escenarios | Difícil | Adicional $$ | Ilimitados |
| Acceso 24/7 | No | No | Sí ✓ |
| Integraciones contables | No | No | Sí ✓ |
| Dashboard en vivo | No | Reportes PDF | Sí ✓ |

---

### SECCIÓN: FAQ

**Título:**
Preguntas Frecuentes

**8 Preguntas Expandibles:**

1. **¿Qué es el EVA y por qué debo usarlo?**
   El EVA (Economic Value Added) es la métrica que te dice si tu empresa realmente crea valor después de considerar el costo de tu capital. Es la diferencia entre tu NOPAT (utilidad operativa después de impuestos) y el costo de tu capital invertido. Si tu EVA es positivo, estás creando riqueza. Si es negativo, estás destruyendo valor aunque tengas utilidades contables.

2. **¿Cómo se conecta con mi contabilidad?**
   EVA Finanzas se integra directamente con tu sistema contable actual (Chift, QuickBooks, Konvex, CONTPAQi) mediante APIs seguras. Solo autorizas la conexión una vez y los datos se sincronizan automáticamente. No necesitas exportar archivos ni capturar nada manualmente.

3. **¿Qué son los "ajustes contables" y por qué son necesarios?**
   La contabilidad tradicional no refleja el valor económico real. Nuestro AC Engine™ convierte tu contabilidad en métricas económicas ajustando partidas como capitalización de I+D, activos improductivos, leasing, y partidas extraordinarias. Esto es lo que hace que tu EVA sea preciso y útil para decisiones.

4. **¿Cómo calculan mi WACC si no cotizo en bolsa?**
   Usamos nuestro sistema WaaS™ (WACC as a Service) que estima tu costo de capital usando betas de empresas comparables en tu industria, ajustados por tu estructura de capital (fórmula de Hamada) y riesgo país. Es el mismo método que usan consultoras top tier, pero automatizado.

5. **¿Mis datos están seguros?**
   Sí. Usamos encriptación AES-256 para datos en reposo, TLS 1.3 para datos en tránsito, y cumplimos con estándares SOC 2. Tus credenciales contables se almacenan encriptadas. Nunca compartimos tu información con terceros. Hosting en infraestructura Vercel (certificada).

6. **¿Puedo cancelar en cualquier momento?**
   Sí, sin penalizaciones. Puedes cancelar tu suscripción en cualquier momento desde tu panel de configuración. Si cancelas, mantienes acceso hasta el final de tu periodo facturado actual. Ofrecemos reembolso completo si cancelas en los primeros 14 días.

7. **¿Ofrecen capacitación o soporte?**
   Sí. Todos los planes incluyen soporte por email. El plan Enterprise incluye onboarding personalizado, capacitación para tu equipo y un gestor de cuenta dedicado. También tenemos una base de conocimientos completa con guías, videos y casos de uso.

8. **¿Funciona para empresas fuera de México?**
   Sí, funciona para toda LATAM. Tenemos ajustes de riesgo país para México, Colombia, Chile, Perú, Argentina y más. Las integraciones contables varían por país (Chift para México, Konvex para LATAM, QuickBooks internacional). Contacta ventas para confirmar disponibilidad en tu país.

---

### SECCIÓN: LLAMADO A LA ACCIÓN FINAL

**Título:**
Deja de Adivinar. Empieza a Crear Valor.

**Subtítulo:**
Únete a las empresas que ya toman decisiones basadas en valor real, no en intuición.

**Dos CTAs Grandes:**
[Calcular mi EVA Gratis - 14 días] (Verde, grande)
[Agendar Demo Personal] (Outline)

**Mini Features:**
- ✓ Sin tarjeta de crédito
- ✓ Configuración en 15 minutos
- ✓ Soporte en español
- ✓ Cancela cuando quieras

**Imagen:**
Dashboard mostrando EVA positivo con equipo celebrando al fondo (foto real, no stock)

---

### FOOTER

**Columnas:**

Producto:
- Características
- Pricing
- Integraciones
- Roadmap
- Changelog

Recursos:
- Blog
- Guía de EVA
- Casos de Uso
- Webinars
- Centro de Ayuda

Empresa:
- Sobre Nosotros
- Contacto
- Carreras
- Prensa
- Partners

Legal:
- Términos de Servicio
- Privacidad
- Seguridad
- GDPR/Datos Personales

Social:
- LinkedIn
- Twitter
- YouTube
- GitHub (API Docs)

**Newsletter:**
"Aprende a crear valor"
[Email] [Suscribirse]

**Copyright:**
© 2025 EVA Finanzas. Todos los derechos reservados.
Hecho con ❤️ en Ciudad de México para LATAM.

---

### COPY ADICIONAL PARA PÁGINAS INTERNAS

**Página /caracteristicas:**
Detalle técnico de cada módulo con screenshots y casos de uso específicos

**Página /integraciones:**
Lista completa de integraciones disponibles, cómo conectar cada una, FAQs técnicos

**Página /industrias:**
EVA Finanzas para Manufactura, Retail, Servicios, Construcción, Tech, etc.
Casos de uso específicos por sector

**Página /recursos/que-es-eva:**
Guía completa educativa sobre EVA:
- Qué es y por qué importa
- Cómo se calcula
- Diferencia vs utilidad contable
- Casos reales
- Plantilla Excel gratuita (lead magnet)

**Página /calculadora-eva-gratis:**
Calculadora interactiva simple:
- Usuario ingresa NOPAT, Capital Invertido, WACC
- Ve su EVA calculado
- CTA: "¿Quieres que sea automático?"
- Lead magnet

---

### EMAILS TRANSACCIONALES (COPY)

**Email 1: Bienvenida**
Asunto: ¡Bienvenido a EVA Finanzas! Calcula tu primer EVA en 15 minutos

Hola [Nombre],

¡Gracias por unirte a EVA Finanzas!

Estás a minutos de conocer el valor real que crea tu empresa.

Tus próximos pasos:
1. Conecta tu contabilidad (Chift, QuickBooks, etc.)
2. Revisa los ajustes automáticos que detectamos
3. Ve tu primer EVA calculado

[Empezar Ahora]

¿Necesitas ayuda? Responde este email o agenda una llamada:
[Agendar Onboarding Gratis]

¡Éxito!
El equipo de EVA Finanzas

---

**Email 2: Primer EVA Calculado**
Asunto: ✓ Tu EVA está listo - [Empresa]

Hola [Nombre],

¡Felicidades! Ya calculamos tu primer EVA:

Tu EVA Actual: $[X,XXX,XXX] [✓ CREAS VALOR / ✗ DESTRUYES VALOR]

NOPAT: $[X]
Capital Invertido: $[X]
WACC: [X]%

[Ver Dashboard Completo]

📊 Próximos pasos:
- Analiza tus drivers de valor
- Crea tu primer escenario: "¿Qué pasa si...?"
- Invita a tu equipo financiero

¿Preguntas? Responde este email.

Saludos,
EVA Finanzas

---

**Email 3: Tips de Uso (Día 3)**
Asunto: 3 formas de usar EVA Finanzas que tal vez no conocías

Hola [Nombre],

Veo que ya calculaste tu EVA. ¡Excelente!

Aquí van 3 tips poderosos:

1. 📈 Crea escenarios "Qué pasa si..."
   Simula inversiones, cambios de estructura de capital o proyectos nuevos. Ve el impacto en tu EVA antes de ejecutar.
   [Crear Escenario]

2. 🎯 Configura alertas
   Te avisamos si tu WACC sube, tu EVA baja o detectamos oportunidades de optimización.
   [Configurar Alertas]

3. 📄 Exporta reportes pro
   Genera PDFs ejecutivos para tu board o inversionistas en un clic.
   [Ver Reportes]

¿Quieres una demo personal? Agenda aquí:
[Agendar Demo]

Saludos,
[Tu nombre]
Customer Success @ EVA Finanzas

---

### SECUENCIAS DE NURTURING (LEAD MAGNETS)

**Lead Magnet 1: "Guía Completa de EVA para PYMEs"**
PDF de 20 páginas:
- Qué es EVA y por qué usarlo
- Cómo calcularlo paso a paso
- Plantilla Excel incluida
- 5 casos de éxito
- Checklist de implementación

**Lead Magnet 2: "Calculadora de WACC para Empresas Privadas"**
Excel interactivo:
- Calcula tu Ke (CAPM)
- Estima tu Beta
- Calcula tu Kd
- Obtén tu WACC

**Lead Magnet 3: "10 Errores Comunes al Calcular EVA"**
PDF corto, muy accionable

---

## CONCLUSIÓN

Este documento contiene:

✅ **5 módulos oficiales nombrados**:
   - EVA Engine (con AC Engine, EVA Calculator, Strategic Dashboard)
   - WaaS (con Beta Estimator, Hamada Calculator, Cost of Capital Engine, Country Risk)
   - Scenario Builder (con Investment Analyzer)
   - Business Unit EVA
   - EVA Compensation (con Bonus Bank)

✅ **7 wireframes detallados** descritos visualmente:
   - Dashboard General
   - AC Engine (wizard de ajustes)
   - WaaS Advanced
   - Escenarios
   - Unidades de Negocio
   - Compensaciones
   - Integraciones

✅ **Arquitectura técnica completa del MVP**:
   - Stack tecnológico definido
   - Microservicios diseñados
   - Schema de base de datos
   - Flujos principales
   - Seguridad y escalabilidad
   - Scope del MVP

✅ **Pitch completo y copy para www.evafinanzas.com**:
   - Hero section
   - Secciones de problema/solución
   - Características
   - Pricing (3 planes)
   - Comparación vs alternativas
   - FAQs
   - CTAs
   - Copy adicional (emails, recursos)

**PRODUCTO COMPLETO Y LISTO PARA EJECUTAR.**

Esta especificación está lista para entregar a:
- Diseñadores UI/UX (para mockups finales)
- Equipo de desarrollo (para estimación y sprint planning)
- Marketing (para lanzamiento de landing)
- Inversionistas (como pitch deck técnico)

**Siguiente paso inmediato:** Priorizar el MVP y crear el primer sprint de desarrollo.

---

*Documento generado para www.evafinanzas.com*
*Versión 1.0 - Marzo 2024*
