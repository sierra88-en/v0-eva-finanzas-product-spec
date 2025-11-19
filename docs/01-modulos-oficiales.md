# 📦 MÓDULOS OFICIALES DE EVA FINANZAS

## SISTEMA COMPLETO DE COMPONENTES

### 1. 🎯 EVA ENGINE (Motor EVA Principal)

**Nombre oficial:** EVA Engine v1.0
**Propósito:** Cálculo automático del Economic Value Added

#### Componentes internos:

##### 1.1 AC Engine (Accounting Conversion Engine)
**Motor de Conversión Contable**

Ajustes automáticos que transforma datos contables en métricas económicas:

- **Capitalización de I+D**: Convierte gastos de investigación y desarrollo en activos capitalizados
- **Ajuste de Activos Improductivos**: Identifica y excluye activos que no generan retorno
- **Normalización de Provisiones**: Ajusta provisiones excesivas o conservadoras
- **Capitalización de Leasing**: Convierte arrendamientos operativos en financieros
- **Eliminación de Partidas Extraordinarias**: Excluye eventos no recurrentes del NOPAT
- **Recálculo de Capital Invertido**: Capital de trabajo + activos fijos netos + otros activos operativos
- **Ajustes de NOPAT**: Utilidad operativa después de impuestos ajustada

**Output:** NOPAT ajustado + Capital Invertido ajustado

##### 1.2 EVA Calculator
**Calculadora Central de EVA**

Fórmula:
\`\`\`
EVA = NOPAT - (Capital Invertido × WACC)
\`\`\`

Variantes calculadas:
- EVA nominal
- EVA porcentual (EVA / Capital Invertido)
- EVA Spread (ROIC - WACC)
- EVA Momentum (cambio año con año)

##### 1.3 Strategic Dashboard
**Panel Estratégico Ejecutivo**

Visualizaciones:
- EVA histórico (últimos 12-36 meses)
- Tendencia de creación/destrucción de valor
- Drivers de EVA (ventas, margen, eficiencia de capital)
- NOPAT vs EBITDA vs Utilidad Neta
- Capital Invertido y eficiencia
- ROIC vs WACC (value spread)
- Alertas automáticas (destrucción sostenida de valor)

---

### 2. 💰 WaaS (WACC as a Service)

**Nombre oficial:** WaaS Engine v1.0
**Propósito:** Estimación profesional del Costo Promedio Ponderado de Capital

#### Componentes:

##### 2.1 Beta Estimator
**Estimador de Betas**

Funcionalidades:
- Base de datos de betas por industria (50+ sectores)
- Betas de empresas comparables cotizadas
- Actualización trimestral de betas
- Ajuste por tamaño de empresa (small-cap premium)

##### 2.2 Hamada Calculator
**Calculadora de Hamada**

Proceso:
1. Toma beta apalancada de comparable
2. Desapalanca: βu = βL / [1 + (1 - T) × (D/E)]
3. Re-apalanca con estructura de capital del cliente: βL = βu × [1 + (1 - T) × (D/E)]

##### 2.3 Country Risk Module
**Módulo de Riesgo País**

- Riesgo país México (EMBI+)
- Riesgo países LATAM seleccionados
- Actualización semanal
- Ajuste de prima por riesgo soberano

##### 2.4 Cost of Capital Calculator

**Cálculo de Ke (Costo del Capital Accionario):**
\`\`\`
Ke = Rf + β × (Rm - Rf) + Rp
\`\`\`
Donde:
- Rf = Tasa libre de riesgo (T-Bills 10 años)
- β = Beta apalancado
- (Rm - Rf) = Prima de riesgo de mercado (~7%)
- Rp = Riesgo país

**Cálculo de Kd (Costo de la Deuda):**
\`\`\`
Kd = Tasa de interés promedio ponderada de deuda
\`\`\`

**Cálculo de WACC:**
\`\`\`
WACC = (E/V) × Ke + (D/V) × Kd × (1 - T)
\`\`\`

##### 2.5 Optimization Engine
**Motor de Optimización de Estructura de Capital**

- Calcula WACC óptimo variando D/E
- Sugiere estructura de capital que minimiza WACC
- Considera restricciones de endeudamiento

---

### 3. 🎲 SCENARIO ENGINE (Motor de Escenarios)

**Nombre oficial:** Scenario Engine v1.0
**Propósito:** Modelado de sensibilidad y simulación de decisiones estratégicas

#### Componentes:

##### 3.1 Sensitivity Analyzer
**Analizador de Sensibilidad**

Escenarios predefinidos:
- **¿Qué pasa si aumenta la deuda?** (variación D/E)
- **¿Qué pasa si invierto en CapEx?** (incremento capital invertido)
- **¿Qué pasa si mejoro márgenes operativos?** (incremento NOPAT)
- **¿Qué pasa si optimizo capital de trabajo?** (reducción capital invertido)
- **¿Qué pasa si cambian las tasas de interés?** (impacto en Kd y WACC)

Variables modificables:
- Ingresos (%)
- Margen EBITDA (%)
- Margen NOPAT (%)
- CapEx ($)
- Capital de trabajo ($)
- Deuda ($)
- Tasa de interés (%)
- Tasa impositiva (%)

##### 3.2 Scenario Builder
**Constructor de Escenarios Custom**

Permite crear escenarios personalizados:
- Optimista (ventas +15%, márgenes +3pp)
- Realista (baseline)
- Pesimista (ventas -10%, márgenes -2pp)
- Custom (usuario define cada variable)

##### 3.3 NPV/IRR Calculator
**Calculadora de VPN/TIR**

Para proyectos de inversión:
- Calcula flujos de EVA proyectados
- Descuenta EVA futuros con WACC
- Calcula MVA (Market Value Added) del proyecto
- TIR del proyecto
- Periodo de recuperación

##### 3.4 Risk Dashboard
**Tablero de Riesgos**

Semáforo de riesgo:
- 🟢 Verde: EVA proyectado positivo y creciente
- 🟡 Amarillo: EVA proyectado cercano a cero o volátil
- 🔴 Rojo: EVA proyectado negativo

Métricas de riesgo:
- Probabilidad de destrucción de valor
- Margen de seguridad (distancia al EVA = 0)
- Sensibilidad a cambios en WACC
- Punto de equilibrio operativo

---

### 4. 🏢 BUSINESS UNIT ENGINE (Motor de Unidades de Negocio)

**Nombre oficial:** BU Engine v1.0
**Propósito:** Desagregación de EVA por unidades, departamentos o proyectos

#### Componentes:

##### 4.1 Unit Allocator
**Asignador de Unidades**

Permite crear jerarquía:
- Empresa → Divisiones → Departamentos
- Empresa → Sucursales
- Empresa → Proyectos
- Empresa → Líneas de producto

##### 4.2 EVA by Unit Calculator

Distribuye:
- NOPAT por unidad (según ingresos o contribución marginal)
- Capital Invertido por unidad (según activos asignados)
- Calcula EVA de cada unidad
- Identifica unidades creadoras vs destructoras de valor

##### 4.3 Ranking & Analytics

Visualizaciones:
- Ranking de unidades por EVA
- Gráfico de burbujas (EVA vs Capital Invertido vs ROIC)
- Matriz de creación de valor (EVA positivo/negativo vs crecimiento)
- Análisis de contribución al EVA total

##### 4.4 Allocation Engine
**Motor de Asignación de Capital**

Recomienda:
- Dónde invertir más capital (unidades con alto ROIC)
- Dónde desinvertir (unidades con ROIC < WACC)
- Optimización de portfolio de unidades

---

### 5. 💼 COMPENSATION ENGINE (Motor de Compensaciones)

**Nombre oficial:** Compensation Engine v1.0
**Propósito:** Sistema de bonos e incentivos ligados a EVA

#### Componentes:

##### 5.1 EVA Bonus Formula

Fórmula de bono:
\`\`\`
Bono = Bono Base + (% de mejora de EVA × Factor)
\`\`\`

Donde:
- Bono Base = salario × % objetivo
- Mejora de EVA = EVA actual - EVA año anterior
- Factor = multiplicador según nivel jerárquico

##### 5.2 Bonus Bank System

Funcionamiento:
- Se acumulan bonos en cuenta virtual
- Solo se paga un % cada año (ej: 40%)
- El resto queda en "banco" y se paga en años siguientes
- Si EVA baja, se reduce el banco

**Beneficio:** Incentiva creación de valor sostenida, no especulación cortoplacista

##### 5.3 Manager Dashboard

Panel gerencial:
- EVA de su unidad
- Meta de EVA
- Bono potencial
- Bonus Bank acumulado
- Simulador: "si mejoro X, gano Y"

##### 5.4 Admin Console

Panel administrativo:
- Configuración de fórmulas de bono
- Asignación de metas por gerente
- Aprobación de pagos
- Historial de compensaciones
- Reportes de cumplimiento

---

### 6. 🔌 INTEGRATION HUB (Centro de Integraciones)

**Nombre oficial:** Integration Hub v1.0
**Propósito:** Conexión con sistemas contables y ERPs

#### Integraciones soportadas:

##### 6.1 Contabilidad México
- **QuickBooks Online** (API oficial)
- **Contpaq i** (importación XML)
- **Aspel COI** (importación)
- **Facturama** (integración facturación)

##### 6.2 Contabilidad Internacional
- **QuickBooks Desktop**
- **Xero**
- **Zoho Books**

##### 6.3 Agregadores Financieros
- **Konvex** (agregador bancario y contable México)
- **Chift** (open banking México)

##### 6.4 Importación Manual
- Balanza de comprobación (Excel/CSV)
- Estado de Resultados (Excel/CSV)
- Balance General (Excel/CSV)
- Plantillas predefinidas

##### 6.5 API Propia
RESTful API para integraciones custom:
- POST /financial-data
- GET /eva-results
- POST /scenarios
- GET /wacc

---

## RESUMEN DE MÓDULOS

| Módulo | Nombre Oficial | Función Principal | Plan |
|--------|---------------|-------------------|------|
| 1 | EVA Engine | Cálculo automático de EVA | Base+ |
| 1.1 | AC Engine | Ajustes contables | Pro+ |
| 2 | WaaS Engine | Cálculo de WACC profesional | Pro+ |
| 3 | Scenario Engine | Modelado de escenarios | Pro+ |
| 4 | BU Engine | EVA por unidades | Enterprise |
| 5 | Compensation Engine | Bonos ligados a EVA | Enterprise |
| 6 | Integration Hub | Conexión con contabilidad | Pro+ |

---

## TECNOLOGÍAS POR MÓDULO

### EVA Engine + AC Engine
- **Backend:** Python (NumPy, Pandas)
- **Cálculos:** Fórmulas vectorizadas
- **Storage:** PostgreSQL (time-series data)

### WaaS Engine
- **Backend:** Node.js
- **Data sources:** APIs financieras (Yahoo Finance, FRED, Banxico)
- **Cache:** Redis (betas y tasas)

### Scenario Engine
- **Backend:** Python (SimPy para simulaciones)
- **Cálculos:** Monte Carlo opcionales
- **Storage:** PostgreSQL + caching

### BU Engine
- **Backend:** Node.js
- **Algoritmos:** Asignación proporcional y ABC
- **Visualización:** ECharts

### Compensation Engine
- **Backend:** Node.js
- **Business logic:** TypeScript
- **Storage:** PostgreSQL (transaccional)

### Integration Hub
- **Backend:** Node.js (Express)
- **Integraciones:** OAuth2, REST APIs
- **Queue:** Bull (procesamiento async)
