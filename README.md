# Tech AI React Landing Page

Live-Demo: https://tech-ai-react-landing-page.vercel.app

Tech AI React Landing Page ist eine moderne, einseitige Vorlage für Produkt- und Service-Landingpages.  
Sie kombiniert React, Vite, Tailwind CSS, TypeScript und Zustand zu einer performanten, modulbasierten und leicht erweiterbaren Architektur.

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
```

Tech AI React Landing Page ist nach funktionalen Bereichen in Ordnern organisiert:

- components/cards: Wiederverwendbare Karten  
- elements: Grundlegende UI-Elemente wie Navbar und Footer  
- sections: Zusammengesetzte Seitenabschnitte  
- shared: Globale Bausteine (Buttons, Container, Titel, Absätze)  
- store: Zustand-Store für das Theme-Management  
- utils: App-Initialisierung und CSS-Konfiguration  

---

## Theming mit Zustand

Das `ThemeStore`-Modul in `src/store/ThemeStore.ts` nutzt Zustand mit Persistenz, um zwischen Light- und Dark-Mode zu wechseln und die Auswahl im Local Storage unter dem Key `"theme"` zu speichern. Beim Start wird das Theme anhand der System­einstellung (`prefers-color-scheme`) initial gesetzt.  

### Kernfunktionen

- **Initialisierung nach Systempräferenz**  
  Beim Laden wird geprüft, ob der Nutzer den Dark Mode auf Systemebene aktiviert hat, und entsprechend `theme` auf `"dark"` oder `"light"` gesetzt.

- **toggleTheme()**  
  Schaltet zwischen `"light"` und `"dark"`, indem es die CSS-Klasse `.dark` am `<html>`-Element hinzufügt oder entfernt und den neuen Wert im Store speichert.

- **Persistenz im Local Storage**  
  Speichert das aktuelle Theme unter dem Key `"theme"`.  
  Beim Rehydratisieren synchronisiert es die `.dark`-Klasse am Root-Element mit dem gespeicherten Wert.  


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
