// definiert eine auffällige Call-to-Action-Sektion, die motiviert, das Produkt auszuprobieren
// kombiniert Überschrift mit Farbverläufen, Begleittext und einen Button
// in einem responsiven Wrapper mit abgerundeten Ecken und Schatten


import { Button } from "../shared/Button";       // Wiederverwendbarer, animierter Button
import { Container } from "../shared/Container"; // Zentrierter Layout-Wrapper mit Innenabständen
import { Paragraph } from "../shared/Paragraph"; // Einheitlich gestylter Textabsatz

export const CTA = () => {
    return(
         // Abschnitt mit extra Bottom-Padding für Abstand zum folgenden Content
        <section className="pb-6 relative">
<Container>
    {/* Hintergrund-Wrapper mit abgerundeten Ecken und Overflow-Hidden */}
    <div className="relative rounded-2xl overflow-hidden">
         {/* Innerer Inhalt mittig, max. Breite und Padding an verschiedene Screengrößen angepasst */}
<div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
     {/* Hauptüberschrift mit Farbverlauf-Highlight im zweiten Teil */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1 leading-[1.4]"> Supercharge Your 
        <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-500">Scientific AI Discovery</span></h1>
        {/* Einleitender Absatz mit extra Top-Padding */}
        <Paragraph className="pt-10">
            Deploy our AI-powered platform to transform your scientific workflow. Gain cutting-edge data analysis and automation at your fingertips.
            </Paragraph>

                        {/* Call-to-Action-Button, zentriert und mit Hover-Farbe */}
        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white hover:text-violet-600">
            <Button>Get Tech AI</Button>
        </div>
</div>
    </div>
</Container>
        </section>
    )
}