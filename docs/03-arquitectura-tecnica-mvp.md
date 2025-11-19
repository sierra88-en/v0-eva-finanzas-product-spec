# 🏗️ ARQUITECTURA TÉCNICA DEL MVP - EVA FINANZAS

## STACK TECNOLÓGICO COMPLETO

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Charts:** ECharts (Apache)
- **State:** SWR + React Context
- **Forms:** React Hook Form + Zod

### Backend
- **Runtime:** Node.js 20 LTS
- **Framework:** Next.js API Routes + Express (microservicios)
- **Language:** TypeScript
- **Validation:** Zod
- **Authentication:** NextAuth.js (Auth.js)

### Cálculos Financieros
- **Language:** Python 3.11+
- **Libraries:**
  - NumPy (operaciones vectorizadas)
  - Pandas (manipulación de datos financieros)
  - SciPy (optimizaciones, IRR, NPV)
- **Deployment:** AWS Lambda Functions (Python runtime)

### Base de Datos
- **Primary DB:** PostgreSQL 15
- **Schema:**
  - Companies (empresas)
  - Financial_Data (datos contables por periodo)
  - EVA_Results (resultados calculados)
  - Business_Units (unidades de negocio)
  - Scenarios (escenarios guardados)
  - Compensation_Plans (planes de compensación)
  - Users (usuarios y permisos)
- **ORM:** Prisma
- **Migrations:** Prisma Migrate

### Cache & Queue
- **Cache:** Redis (Upstash)
  - Betas por industria
  - Tasas de referencia (Rf, EMBI+)
  - WACC calculados
  - TTL: 1 hora - 24 horas
- **Queue:** Bull (Redis-backed)
  - Procesamiento async de cálculos EVA
  - Sincronizaciones de integraciones
  - Generación de reportes

### Infraestructura
- **Cloud Provider:** AWS / Vercel (Hybrid)
- **Frontend Hosting:** Vercel
- **Backend APIs:** AWS ECS (Docker containers)
- **Python Functions:** AWS Lambda
- **Database:** AWS RDS (PostgreSQL)
- **Cache:** Upstash Redis
- **Storage:** AWS S3 (archivos importados, exports)
- **CDN:** Cloudflare

### Integraciones
- **QuickBooks:** OAuth2 + QuickBooks API v3
- **Konvex:** API REST
- **Chift:** Open Banking API
- **Financial Data:** 
  - Yahoo Finance API (betas, tasas)
  - FRED API (tasas libres de riesgo)
  - Banxico API (riesgo país México)

---

## ARQUITECTURA DE MICROSERVICIOS

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                      │
│                     www.evafinanzas.com                      │
│                                                               │
│  • Dashboard UI                                              │
│  • AC Engine Wizard                                          │
│  • WACC Calculator UI                                        │
│  • Scenario Builder                                          │
│  • Charts & Visualizations                                   │
│                                                               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTPS / REST API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                     API GATEWAY                              │
│                   (Next.js API Routes)                       │
│                                                               │
│  • Authentication                                            │
│  • Rate Limiting                                             │
│  • Request Routing                                           │
│  • Error Handling                                            │
│                                                               │
└──────┬────────┬────────┬────────┬────────┬─────────┬────────┘
       │        │        │        │        │         │
       │        │        │        │        │         │
┌──────▼───┐ ┌─▼────┐ ┌─▼────┐ ┌─▼────┐ ┌─▼────┐ ┌─▼────────┐
│  EVA     │ │ WaaS │ │Scene-│ │  BU  │ │ Comp │ │Integrat- │
│ Engine   │ │Engine│ │ arios│ │Engine│ │Engine│ │ion Hub   │
│          │ │      │ │      │ │      │ │      │ │          │
│ Python   │ │Node.js│Node.js│Node.js│Node.js│ │ Node.js  │
│ Lambda   │ │ +Redis│      │ │      │ │      │ │          │
└──────┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───────┘
       │        │        │        │        │         │
       │        │        │        │        │         │
       └────────┴────────┴────────┴────────┴─────────┘
                         │
                         │
                ┌────────▼────────┐
                │   PostgreSQL    │
                │   (RDS)         │
                │                 │
                │ • Companies     │
                │ • Financial     │
                │ • EVA Results   │
                │ • Scenarios     │
                │ • Users         │
                └─────────────────┘
\`\`\`

---

## MÓDULOS Y SERVICIOS

### 1. EVA ENGINE SERVICE (Python Lambda)

**Endpoint:** `POST /api/calculate-eva`

**Input:**
\`\`\`json
{
  "company_id": "uuid",
  "period": "2024-Q4",
  "nopat_raw": 7240000,
  "capital_invested_raw": 51040000,
  "adjustments": {
    "rd_capitalization": 1200000,
    "rd_amortization_years": 5,
    "nonproductive_assets": 0,
    "leasing_adjustments": 0,
    "extraordinary_items": 0
  },
  "wacc": 0.125
}
\`\`\`

**Output:**
\`\`\`json
{
  "eva": 2450000,
  "nopat_adjusted": 8200000,
  "capital_invested_adjusted": 52000000,
  "roic": 0.158,
  "spread": 0.033,
  "adjustments_applied": {
    "rd_capitalization": 960000,
    "total_nopat_increase": 960000,
    "total_capital_increase": 960000
  }
}
\`\`\`

**Architecture:**
- AWS Lambda (Python 3.11)
- Handler: `eva_calculator.calculate(event, context)`
- Libraries: NumPy, Pandas
- Timeout: 30s
- Memory: 512MB

---

### 2. WaaS ENGINE SERVICE (Node.js)

**Endpoint:** `POST /api/calculate-wacc`

**Input:**
\`\`\`json
{
  "company_id": "uuid",
  "industry": "manufacturing",
  "equity": 31200000,
  "debt": 20800000,
  "debt_interest_rate": 0.115,
  "tax_rate": 0.30,
  "country": "mexico"
}
\`\`\`

**Output:**
\`\`\`json
{
  "wacc": 0.125,
  "ke": 0.168,
  "kd_after_tax": 0.092,
  "capital_structure": {
    "equity_weight": 0.60,
    "debt_weight": 0.40
  },
  "breakdown": {
    "beta_unlevered": 0.95,
    "beta_levered": 1.25,
    "risk_free_rate": 0.045,
    "market_risk_premium": 0.070,
    "country_risk": 0.032
  }
}
\`\`\`

**Architecture:**
- Node.js microservice (Express)
- Redis cache for betas (TTL: 24h)
- External APIs:
  - Yahoo Finance (betas)
  - FRED (risk-free rate)
  - Banxico (country risk)
- Deployment: Docker container on AWS ECS

---

### 3. SCENARIO ENGINE (Node.js)

**Endpoint:** `POST /api/scenarios/simulate`

**Input:**
\`\`\`json
{
  "company_id": "uuid",
  "base_period": "2024-Q4",
  "changes": {
    "revenue_growth": 0.25,
    "nopat_margin_change": -0.015,
    "capex_investment": 800000,
    "working_capital_increase": 200000,
    "new_debt": 600000,
    "debt_interest_rate": 0.105
  },
  "projection_years": 5
}
\`\`\`

**Output:**
\`\`\`json
{
  "scenario_id": "uuid",
  "projected_eva": {
    "year_1": 2630000,
    "year_2": 2850000,
    "year_3": 3100000,
    "year_4": 3200000,
    "year_5": 3350000
  },
  "npv": 1250000,
  "irr": 0.185,
  "payback_period": 3.2,
  "recommendation": "PROCEED",
  "risk_level": "MEDIUM"
}
\`\`\`

**Architecture:**
- Node.js microservice
- Calls EVA Engine and WaaS Engine
- NPV/IRR calculations with SciPy (via Lambda)
- Stores scenarios in PostgreSQL

---

### 4. BU ENGINE (Node.js)

**Endpoint:** `POST /api/business-units/calculate-eva`

**Input:**
\`\`\`json
{
  "company_id": "uuid",
  "period": "2024-Q4",
  "units": [
    {
      "unit_id": "uuid",
      "name": "Sucursal Norte",
      "revenue": 18000000,
      "nopat": 2100000,
      "capital_invested": 6500000
    },
    {
      "unit_id": "uuid",
      "name": "Sucursal Este",
      "revenue": 8000000,
      "nopat": 178000,
      "capital_invested": 1700000
    }
  ],
  "corporate_wacc": 0.125
}
\`\`\`

**Output:**
\`\`\`json
{
  "units_eva": [
    {
      "unit_id": "uuid",
      "name": "Sucursal Norte",
      "eva": 1200000,
      "roic": 0.185,
      "spread": 0.060,
      "status": "VALUE_CREATOR"
    },
    {
      "unit_id": "uuid",
      "name": "Sucursal Este",
      "eva": -180000,
      "roic": 0.105,
      "spread": -0.020,
      "status": "VALUE_DESTROYER"
    }
  ],
  "total_eva": 2390000,
  "recommendations": [
    {
      "unit": "Sucursal Este",
      "action": "IMPROVE_OR_CLOSE",
      "rationale": "ROIC below WACC"
    }
  ]
}
\`\`\`

---

### 5. COMPENSATION ENGINE (Node.js)

**Endpoint:** `POST /api/compensation/calculate-bonus`

**Input:**
\`\`\`json
{
  "manager_id": "uuid",
  "period": "2024-Q4",
  "unit_eva_current": 1200000,
  "unit_eva_previous": 1000000,
  "target_eva": 1000000,
  "base_salary": 150000,
  "bonus_config": {
    "base_bonus_pct": 0.10,
    "improvement_factor": 0.005,
    "target_multiplier": 1.5,
    "payout_pct": 0.40,
    "bank_pct": 0.60
  }
}
\`\`\`

**Output:**
\`\`\`json
{
  "bonus_earned": 20500,
  "breakdown": {
    "base_bonus": 15000,
    "improvement_bonus": 1000,
    "target_bonus": 4500
  },
  "bonus_bank": {
    "previous_balance": 18400,
    "new_earned": 20500,
    "total": 38900,
    "payout_now": 15560,
    "remaining": 23340
  }
}
\`\`\`

---

### 6. INTEGRATION HUB (Node.js)

**Endpoints:**
- `POST /api/integrations/quickbooks/connect`
- `POST /api/integrations/quickbooks/sync`
- `POST /api/integrations/manual/import`

**QuickBooks Sync Flow:**
\`\`\`
1. User clicks "Conectar QuickBooks"
2. OAuth2 flow → user authorizes
3. Store access_token in DB (encrypted)
4. Background job runs daily:
   - Fetch Trial Balance
   - Fetch P&L Statement
   - Fetch Balance Sheet
   - Map to internal schema
   - Store in Financial_Data table
5. Trigger EVA Engine calculation
\`\`\`

**Manual Import:**
- Upload Excel/CSV
- Validate structure (via Zod schema)
- Parse and map to internal schema
- Store in Financial_Data
- Trigger calculation

---

## BASE DE DATOS (PostgreSQL)

### Schema Principal

\`\`\`sql
-- Companies
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  country VARCHAR(50) DEFAULT 'mexico',
  tax_rate DECIMAL(4,3) DEFAULT 0.30,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Financial Data (importado de contabilidad)
CREATE TABLE financial_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  period VARCHAR(20), -- "2024-Q4"
  revenue DECIMAL(15,2),
  operating_income DECIMAL(15,2),
  nopat_raw DECIMAL(15,2),
  total_assets DECIMAL(15,2),
  current_liabilities DECIMAL(15,2),
  capital_invested_raw DECIMAL(15,2),
  equity DECIMAL(15,2),
  debt DECIMAL(15,2),
  debt_interest_rate DECIMAL(5,4),
  imported_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(company_id, period)
);

-- EVA Results (calculados)
CREATE TABLE eva_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  period VARCHAR(20),
  nopat_adjusted DECIMAL(15,2),
  capital_invested_adjusted DECIMAL(15,2),
  wacc DECIMAL(5,4),
  eva DECIMAL(15,2),
  roic DECIMAL(5,4),
  spread DECIMAL(5,4),
  calculated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(company_id, period)
);

-- Business Units
CREATE TABLE business_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  name VARCHAR(255),
  type VARCHAR(50), -- "branch", "department", "project"
  parent_id UUID REFERENCES business_units(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- BU EVA Results
CREATE TABLE bu_eva_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id UUID REFERENCES business_units(id),
  period VARCHAR(20),
  nopat DECIMAL(15,2),
  capital_invested DECIMAL(15,2),
  eva DECIMAL(15,2),
  roic DECIMAL(5,4),
  calculated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(unit_id, period)
);

-- Scenarios
CREATE TABLE scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  user_id UUID REFERENCES users(id),
  name VARCHAR(255),
  description TEXT,
  base_period VARCHAR(20),
  changes JSONB, -- JSON con modificaciones
  results JSONB, -- JSON con resultados proyectados
  created_at TIMESTAMP DEFAULT NOW()
);

-- Compensation Plans
CREATE TABLE compensation_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  manager_id UUID REFERENCES users(id),
  unit_id UUID REFERENCES business_units(id),
  period VARCHAR(20),
  target_eva DECIMAL(15,2),
  bonus_earned DECIMAL(15,2),
  bonus_paid DECIMAL(15,2),
  bonus_bank_balance DECIMAL(15,2),
  calculated_at TIMESTAMP DEFAULT NOW()
);

-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  company_id UUID REFERENCES companies(id),
  role VARCHAR(50), -- "admin", "manager", "viewer"
  created_at TIMESTAMP DEFAULT NOW()
);

-- Integrations
CREATE TABLE integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  provider VARCHAR(50), -- "quickbooks", "konvex"
  access_token TEXT, -- encrypted
  refresh_token TEXT, -- encrypted
  expires_at TIMESTAMP,
  last_sync_at TIMESTAMP,
  sync_frequency VARCHAR(20) DEFAULT 'daily',
  status VARCHAR(20) DEFAULT 'active'
);
\`\`\`

---

## APIS EXTERNAS Y CACHÉ

### Betas por Industria (Yahoo Finance)
\`\`\`python
# Cache key: beta:industry:{industry_name}
# TTL: 24 hours
# Fallback: database with curated betas
\`\`\`

### Tasa Libre de Riesgo (FRED API)
\`\`\`python
# Cache key: rate:risk_free
# TTL: 1 hour
# Source: 10-year T-Bills
\`\`\`

### Riesgo País (Banxico / JP Morgan EMBI+)
\`\`\`python
# Cache key: rate:country_risk:{country}
# TTL: 6 hours
# Source: EMBI+ spread
\`\`\`

---

## SEGURIDAD

### Autenticación
- NextAuth.js con JWT
- Proveedores: Email/Password, Google OAuth
- Session storage: JWT en cookie httpOnly

### Autorización
- RBAC (Role-Based Access Control)
- Roles: Admin, Manager, Viewer
- Permisos por recurso (empresa, unidad)

### Encriptación
- Access tokens de integraciones: AES-256
- Datos sensibles en DB: pgcrypto
- HTTPS obligatorio (Cloudflare SSL)

### Rate Limiting
- 100 requests/minuto por IP
- 1000 requests/hora por user
- Implementado con Redis

---

## DEPLOYMENT PIPELINE

### CI/CD (GitHub Actions)

\`\`\`yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  frontend:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Build Next.js
      - Deploy to Vercel

  backend:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Build Docker images
      - Push to AWS ECR
      - Deploy to AWS ECS

  python-lambdas:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Package Lambda functions
      - Deploy to AWS Lambda
\`\`\`

### Environments
- **Development:** Local + Staging DB
- **Staging:** Vercel Preview + AWS Staging
- **Production:** Vercel + AWS Production

---

## MONITOREO Y OBSERVABILIDAD

### Logs
- Frontend: Vercel Analytics
- Backend: AWS CloudWatch
- Python Lambdas: CloudWatch Logs

### Metrics
- APM: Datadog / New Relic
- Uptime: Pingdom
- Errors: Sentry

### Alertas
- EVA calculation failures
- Integration sync failures
- High latency (>2s)
- Database errors

---

## COSTOS ESTIMADOS (MVP)

| Servicio | Costo Mensual |
|----------|--------------|
| Vercel Pro | $20 |
| AWS ECS (2 tasks) | $60 |
| AWS Lambda (50K invocations) | $10 |
| AWS RDS PostgreSQL | $50 |
| Upstash Redis | $10 |
| AWS S3 | $5 |
| Cloudflare Pro | $20 |
| **TOTAL** | **$175/mes** |

---

## ESCALABILIDAD

### Fase 1 (0-100 empresas)
- Arquitectura actual
- Single region (US-East)
- 1 instancia de cada servicio

### Fase 2 (100-1000 empresas)
- Auto-scaling en ECS
- Read replicas en RDS
- Multi-region CDN

### Fase 3 (1000+ empresas)
- Kubernetes cluster
- Microservicios distribuidos
- Multi-region database
- Advanced caching (CDN + Redis Cluster)

---

## ROADMAP TÉCNICO

**MVP (3 meses):**
- ✅ EVA Engine
- ✅ Dashboard básico
- ✅ QuickBooks integration
- ✅ WaaS básico

**V2 (6 meses):**
- ✅ Scenario Engine
- ✅ BU Engine
- ✅ Más integraciones (Konvex, Xero)

**V3 (12 meses):**
- ✅ Compensation Engine
- ✅ Mobile app (React Native)
- ✅ AI recommendations (LLM integration)
