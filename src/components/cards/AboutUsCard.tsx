// Diese Komponente rendert eine Karte, die Informationen wie Titel, Beschreibung und optionale Kind-Elemente anzeigt

// Import der Paragraph-Komponente, die für die Darstellung von Textabsätzen verwendet wird
import { Paragraph } from "../shared/Paragraph";


// Definition der Props-Schnittstelle
//  - title: Der Titel der Karte (z. B. Sektionstitel)
// - description: Die Beschreibung, die in der Karte angezeigt wird
// - children: Optionale React-Children-Elemente (für Icons oder zusätzliche Inhalte)
interface AboutUsCardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}


// funktionale React-Komponente, die eine stilisierte Karte rendert
// verwendet Tailwind-CSS-Klassen für das Styling und ist responsiv für verschiedene Bildschirmgrößen
export const AboutUsCard = ({ title, description, children }: AboutUsCardProps) => {
  return (
    // Äußerer Container der Karte mit responsivem Padding, abgerundeten Ecken, einem Rand und einem Schatten
    // Die Klasse `overflow-hidden` verhindert, dass Inhalte über den Container hinauslaufen
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">

      {/* Container für optionale Children-Elemente (z. B. ein Icon), mit violettem Hintergrund und abgerundeten Ecken
      Die Klasse `w-max` sorgt dafür, dass der Container nur so breit ist wie sein Inhalt */}
        <div className="rounded-xl  bg-violet-800 p-3 text-heading-1 w-max relative mb-2">
        {children}
      </div>
        {/* Der Titel der Karte, formatiert als Überschrift h2 mit responsiver Schriftgröße und Fettschrift */}
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl mb-2">
        {title}
      </h2>
      {/* Die Beschreibung der Karte, die über die wiederverwendbare Paragraph-Komponente gerendert wird */}
      <Paragraph>{description}</Paragraph>
    </div>
    )
}