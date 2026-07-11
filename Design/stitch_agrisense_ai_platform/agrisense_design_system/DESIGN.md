---
name: AgriSense Design System
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#40493d'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#2a6b2c'
  on-secondary: '#ffffff'
  secondary-container: '#acf4a4'
  on-secondary-container: '#307231'
  tertiary: '#923357'
  on-tertiary: '#ffffff'
  tertiary-container: '#b14b6f'
  on-tertiary-container: '#ffedf0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#acf4a4'
  secondary-fixed-dim: '#91d78a'
  on-secondary-fixed: '#002203'
  on-secondary-fixed-variant: '#0c5216'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c7'
  on-tertiary-fixed: '#3f001c'
  on-tertiary-fixed-variant: '#7f2448'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is engineered for a premium, AI-driven agricultural SaaS specifically tailored for the Bangladeshi market. It evokes a sense of **technological optimism, precision, and earth-rooted reliability**. 

Drawing inspiration from high-end software brands like Apple and Linear, the aesthetic is **Modern Minimalist**. It utilizes generous whitespace to reduce cognitive load for users managing complex data, while incorporating tactile elements like large border radii and soft, ambient shadows to feel approachable. The personality is "The Expert Partner"—professional and clean, yet vibrant enough to reflect the life and growth of the agricultural sector.

## Colors
The palette is rooted in a **Verdant Primary Green**, representing health and productivity. The background defaults to a clean, off-white (`#F5F5F7`) to minimize glare and maximize readability in outdoor environments.

- **Primary:** Used for main actions, active states, and brand-defining accents.
- **Surface Tiers:** Backgrounds use a light-gray-to-white hierarchy to define container depth.
- **Semantic Colors:** Status indicators (Success, Warning, Info) use standard functional hues but are calibrated for high contrast against both white and light-green backgrounds.
- **Subtle Gradients:** Use a gentle linear gradient from `green-500` to `secondary` for high-impact surfaces like hero buttons or featured cards.

## Typography
This design system uses **Inter** for all roles to ensure a systematic, utilitarian feel that performs exceptionally well on high-density displays.

- **Scale:** High contrast between display types and body text creates a clear information hierarchy.
- **Weight:** Use `Bold (700)` for display, `SemiBold (600)` for UI headers, and `Regular (400)` for readable content.
- **Optimized for Reading:** Body text utilizes a generous line height (1.5x) to accommodate technical agricultural terminology and translation lengths.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 8px-based increments. 

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (up to 80px) to maintain a premium, focused feel.
- **Mobile:** 4-column grid with 16px margins.
- **Rhythm:** Use `lg` (40px) or `xl` (64px) spacing between distinct sections to reinforce the "minimal" brand pillar. Avoid "cramming" data; prefer scrolling over density.

## Elevation & Depth
Depth is conveyed through **Tonal Layers and Ambient Shadows**.

- **Surface 0:** Base background (`neutral-100`).
- **Surface 1:** Primary cards and containers. White background with a very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.04)`.
- **Surface 2:** Floating elements (modals, dropdowns). White background with a more pronounced shadow: `0px 10px 32px rgba(0, 0, 0, 0.08)`.
- **Glassmorphism:** Use for fixed navigation bars. Backdrop-blur (12px) with a semi-transparent white tint (80% opacity) to maintain context of the content behind it.

## Shapes
The shape language is **distinctly rounded** to feel modern and friendly. 

- **Base components:** (Buttons, Inputs) use `0.5rem` (rounded).
- **Major containers:** (Service cards, Analysis results) use `1.5rem` (rounded-xl).
- **Interactive chips:** Use pill-shaped (100px) radii.
- **Consistency:** Never mix sharp corners with rounded ones; all interactive and containment elements must follow the rounded-xl standard for large surfaces.

## Components

### Service Cards & Analysis Results
Cards should feature a white background, `rounded-xl` corners, and a subtle `1px` border in `neutral-200`. Use icon containers with a light green background (`green-50`) to anchor the visual. Data within analysis results should use high-contrast typography for the primary metric and `label-sm` for units.

### Input Areas
Fields should have a `neutral-50` background with a subtle inner shadow. On focus, transition the border to `primary-green` and add a soft green glow (`4px` spread). Placeholder text should be `neutral-400`.

### Chat Interface
The AI chat interface uses a "Message Bubble" pattern. User messages are `green-500` with white text; AI messages are `neutral-100` with dark text. The input bar for the chat should be fixed at the bottom with a frosted glass background.

### Buttons
- **Primary:** Solid `green-500` with white text. High-quality iconography (20px) should precede the text.
- **Secondary:** Ghost style with `green-500` text and border.
- **Tertiary:** Text-only for less critical actions, using `green-900` for high legibility.