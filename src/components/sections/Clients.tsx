// Auflistung von Kunden-Logos mit Hover-Effekten
// Logos werden standardmäßig in Graustufen angezeigt und färben sich beim Überfahren in ihrer Originalfarbe

/* Importiert den Container für zentriertes Layout und den Titel für Überschriften */
import { Container } from "../shared/Container"
import { Title } from "../shared/Title"

// Array mit Bezeichnern der Logo-Dateien im Verzeichnis /assets/logos/
const logos = ["bayer", "bostondyn", "esa", "stanford","nanya","openal","stem"];
export const Clients = () => {
    return(
        <section>
          {/* Container sorgt für definierte Maximalbreite und horizontale Einrückungen */}
            <Container className="space-y-8">
              {/* Überschrift zentriert über der Logo-Reihe */}
<div className="text-center max-w-3xl mx-auto">
    <Title>
        Empowering Scientists Worldwide
    </Title>
</div>
{/* Flexbox-Grid für Logos: wrappt bei kleinerer Breite, zentriert den Inhalt */}
<div className="flex justify-center flex-wrap gap-4">
     {logos.map((logo, key) => (
      // Jeder Wrapper erhält die Klasse `group`, um Hover-Effekte an child weiterzugeben
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              {/* 
                Logo-Bild:
                - grayscale filtert das Bild standardmäßig dunkel/grau
                - group-hover:!grayscale-0 entfernt den Filter beim Hover
                - scale-110 vergrößert das Logo leicht beim Hover
              */}
              <img
                src={`/assets/logos/${logo}.png`}
                width="100"
                height="60"
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}

</div>
            </Container>
        </section>
    )
}