//  H1-Überschrift mit vordefinierten Tailwind-Klassen
// für konsistente Schriftgröße und -gewicht in verschiedenen Bildschirmgrößen

interface TitleProps {
    // Der Inhalt der Überschrift, typischerweise ein String oder React-Knoten 
    children: React.ReactNode; 
}

export const Title = ({ children}: TitleProps) => {
    return (
        // Tailwind-Klassen passen die Schriftgrößen responsiv an
        <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
            {children}
        </h1>
    );
};