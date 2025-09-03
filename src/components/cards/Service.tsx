// Stellt eine wiederverwendbare "Service Card" dar, die Logo/Icon, Titel und Beschreibung in einem ansprechenden Layout kombiniert
// nutzt Tailwind-CSS-Klassen für Abstände, Hintergrund, Schatten und abgerundete Ecken
// Durch die Props-Schnittstelle bleibt sie flexibel und typgesichert

import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
    // Der Titel des Service-Abschnitts
    title: string;
    // Eine kurze Beschreibung des angebotenen Services
    description: string;
     // React-Node für das Icon, z. B. ein SVG-Element oder ein Icon-Component
    icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden">
                        {/* Icon-Container mit abgerundetem Hintergrund */}
            <div className="rounded-xl bg-violet-800 p-3 text-heading-1 w-max relative"
            >{icon}</div>
            {/* Textbereich: Titel und Beschreibung */}
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
                {/* Paragraph-Komponente sorgt für konsistentes Textstyling */}
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}