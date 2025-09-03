// Zeigt eine Überschrift, einen einführenden Text und
// eine responsive Grid-Liste der angebotenen Dienstleistungen an


import { services } from "../../utils/services-data";   // Datenquelle für alle Service-Karten
import { Service } from "../cards/Service"; // Wiederverwendbare Karten-Komponente
import { Container } from "../shared/Container"; // Layout-Wrapper für konsistente Abstände
import { Paragraph } from "../shared/Paragraph"; // Typografische Komponente für Fließtexte
import { Title } from "../shared/Title"; 

export const Services = () => {
    return(
        // Semantischer Section-Wrapper mit Anker für Navigation
        <section id="services">
             {/* Vertikale Abstände im Container definieren:
          space-y-10 für mobile, space-y-12 ab mittleren Breakpoints */}
<Container className="space-y-10 md:space-y-12">
    {/* Überschrift und Einleitung zentriert ausrichten,
            begrenzen auf max. Breite für bessere Lesbarkeit */}
<div className="text-center max-w-3xl mx-auto space-y-4">

<Title>AI for Science</Title>

<Paragraph>Harness the power of deep learning, neural networks, and computational modeling to accelerate discovery.
    Our solutions include:
</Paragraph>
</div>
{/* Responsive Grid:
            1 Spalte auf small, 2 Spalten ab Small, 3 Spalten ab Large, mit Lücken */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
    {services.map((service, key) =>(
         // Jede Service-Karte erhält einen individuellen Key
        <Service
        key={key}
        title={service.title}  // Titel des Service-Angebots
        description={service.description}  // Kurzbeschreibung
        icon={service.icon}  // SVG-Icon als React-Element
            />
    ))}
</div>
</Container>
        </section>
    );
}