# Concept

### **What**

**Membership** is a donation model where a payment confers a supporter status (time-bound or rule-based), with structure and lifecycle governed by the nonprofit’s CRM.

**FundraiseUp’s role** is execution: carry explicit membership semantics, process payments, generate correct receipts, and reflect CRM-computed status to donors.

---

### **Why (Strategic Alignment)**

Membership represents a distinct donor intent that is currently under-realized in FundraiseUp due to donation-centric semantics and implicit inference.

By introducing **explicit membership semantics at the donation-model level**, FundraiseUp enables accurate execution of membership payments while preserving CRM primacy.

This is a **sturctural completeness investment**:

- improves intent realization and enterprise fit,
- reduces operational friction,
- strengthens platform trust,
- **without** expanding into donor acquisition or lifecycle ownership.

Adoption follows **land-and-expand**: FundraiseUp is adopted for donations first, then extended to membership execution as organizations consolidate payment flows without replacing CRM logic.

---

### **Market Size (Execution-Compatible)**

- **TAM:** ~$19–20B annual GPV (all online membership-related giving; economic surface only)
- **SAM:** ~$7–9B annual GPV
    
    Membership GPV among nonprofits where FundraiseUp can realistically be the **donation execution layer**, excluding membership-first / donation-light orgs.
    
- **SOM (phased, 3–5 years):** ~$40M–$800M GPV
    - Phase 1: 0.5–1% — expansion within existing customers
    - Phase 2 (base): 3–5% — donation-led adoption, membership added post-trust
    - Phase 3: 8–10% — rare, slow displacement at the margins (not cold replacement)

**Verifiable demand**

At least **6.4%** of [current customers](https://docs.google.com/spreadsheets/d/15_SX7A-ghD3HX85eKWnS00QgcWazk5Qghoi8fsBAzvE/edit?gid=1060822030#gid=1060822030) (175 of 2,720) have active Membership programs (32 Tier 1–3, 143 Tier 4–6), which is mostly live outside of FRU execution layer. If memberships represent **20–40%** of net proceeds for these organizations, then the membership-related GPV embedded in the existing FundraiseUp customer base is on the order of **$20–40M annual GPV.** 

---

### **Problem**

1. Membership intent is implicit and inferred, not explicit.
2. Membership semantics are conflated with donations (language, receipts, tax).
3. Gift / payer≠member scenarios are unsupported.
4. Execution data lacks a membership object aligned to CRM models.

---

### **How (Scope & Principles)**

**FundraiseUp does:**

- Introduces **Membership as an explicit donation model**.
- Executes payments with explicit membership intent and CRM membership identifiers.
- Uses **reference-only identifiers** (with presentation metadata).
- Generates **membership-correct receipts** (including CRM-defined FMV where applicable),  and stores them in the Donor Portal.
- Reflects **CRM-computed membership status** read-only to donors.

**FundraiseUp does NOT:**

- Define tiers, benefits, FMV, renewal, or lifecycle rules.
- Own membership governance or community tooling.

**Principles:** CRM primacy · explicit semantics over inference · execution without lifecycle ownership · compliance and trust by default.

---

### **Competitive Position**

FundraiseUp does **not** compete to replace membership systems.

It competes at the **execution layer**, enabling consolidation of donation and membership payments **without absorbing lifecycle ownership**.

---

### **Impact**

Primary impact is realization of previously unserviceable membership GPV by enabling execution-layer consolidation, with realization dependent on coordinated GTM adoption rather than feature availability alone.

Impact accrues via **expansion within existing and donation-execution-compatible customers**, not membership-led acquisition.

### **ROI**

~$330–470K investment to realize $10–20M GPV in Year 1 ($290–580K revenue at 2.9%), with payback ~12–24 months depending on GTM uptake.

---

### **Decision Lens**

Evaluated on:

- Preservation and realization of high-intent membership GPV
- Ability to expand GPV per org via execution consolidation
- Enterprise fit, trust, and sales unblock
- Absence of negative externalities (CRM primacy enforced)