# Tech AI React Landing Page

Live-Demo: https://tech-ai-react-landing-page.vercel.app

Tech AI React Landing Page ist eine moderne, einseitige Vorlage für Produkt- und Service-Landingpages.  
Sie kombiniert React, Vite, Tailwind CSS, TypeScript und Zustand zu einer performanten, modulbasierten und leicht erweiterbaren Architektur.

---

## Projektbeschreibung

Die Anwendung besteht aus mehreren klar abgegrenzten Sektionen (Hero, Services, Pricing, Statistics, Clients, About Us) und bietet:

- Schnelle Ladezeiten dank Vite und ESBuild  
- Responsives Design mit Utility-First-Ansatz von Tailwind CSS  
- Type-safe Development durch TypeScript  
- Persistentes Dark/Light-Theme via Zustand  

---

## Design

Tailwind CSS ermöglicht kurze Iterationszyklen durch Utility-Klassen, während modulare Komponenten Wiederverwendbarkeit gewährleisten.  
Der responsiv getestete Breakpoint-Ansatz stellt optimale Darstellung auf Mobilgeräten, Tablets und Desktops sicher.

---

## Funktionalität

- Header & Navigation: Feststehender Navbar mit Link-Animation  
- Clients: Animierte Partner-Logos  
- Theme Switcher: Umschaltung zwischen Hell- und Dunkelmodus mit Speicherung im LocalStorage  

---

## Projektstruktur

```plaintext
tech-ai-react-landing-page/
├── public/
│   └── assets/
│       └── logos/
│           ├── about-us.png
│           ├── icon.svg
│           ├── react.svg
│           └── sci-hero.png
├── src/
│   ├── components/
│   │   └── cards/
│   │       ├── AboutUsCard.tsx
│   │       └── Service.tsx
│   ├── elements/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── AboutUs.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Clients.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Services.tsx
│   │   └── Statistics.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── ButtonLink.tsx
│   │   ├── Container.tsx
│   │   ├── NavItem.tsx
│   │   ├── Paragraph.tsx
│   │   ├── Title.tsx
│   │   └── Layout.tsx
│   ├── store/
│   │   └── ThemeStore.ts
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
```

## Komponentenbasierte Architektur

Die Ordnerstruktur folgt einem klaren Prinzip:

- components/cards: Wiederverwendbare Karten  
- elements: Grundlegende UI-Elemente wie Navbar und Footer  
- sections: Zusammengesetzte Seitenabschnitte  
- shared: Globale Bausteine (Buttons, Container, Titel, Absätze)  
- store: Zustand-Store für das Theme-Management  
- utils: App-Initialisierung und CSS-Konfiguration  

---

## Theming mit Zustand

Das ThemeStore-Modul in `src/store/ThemeStore.ts` verwaltet den Light/Dark-Modus über Zustand und persistiert die Auswahl im LocalStorage. Kernfunktionen:

- `getCurrentTheme()`: Ermittelt gespeicherten Modus  
- `setTheme(mode: 'light' | 'dark')`: Schaltet global um  
- Automatische Anpassung der HTML- und Body-Klassen  

---

## Technologie-Stack

| Technologie   | Beschreibung                        |
|---------------|-------------------------------------|
| React         | Komponentenbasiertes UI-Framework   |
| Vite          | Entwicklungsserver & Bundler        |
| TypeScript    | Statische Typisierung               |
| Tailwind CSS  | Utility-First-CSS-Framework         |
| Zustand       | Leichter State-Manager              |
| ESBuild       | Schnelles Bundling                  |
| PostCSS       | CSS-Verarbeitung                    |
