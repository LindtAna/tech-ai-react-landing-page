// Diese Komponente rendert einen formatierten Textabsatz mit einheitlichem Styling für die gesamte Anwendung.
// Kapselt Tailwind-Klassen und ermöglicht zusätzliches Styling

interface ParagraphProps {
     // Inhalt des Absatzes, kann aus Text oder beliebigen React-Knoten bestehen
    children: React.ReactNode;
    // Erlaubt das Hinzufügen zusätzlicher CSS-Klassen für Sonderfälle
    className?: string;
}
// Die Paragraph-Komponente rendert einen <p>-Tag mit vordefiniertem Styling
// Sie ist wiederverwendbar und ermöglicht einheitliche Textformatierung
export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
    // Der <p>-Tag verwendet Tailwind-CSS-Klassen für konsistentes Styling
    // Die `className`-Prop ermöglicht es, zusätzliche Stile hinzuzufügen
    return (
        <p className={`text-heading-3 md:text-lg ${className}`}>
            {children}
        </p>
    );
};