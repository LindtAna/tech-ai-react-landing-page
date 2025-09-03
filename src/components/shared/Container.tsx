// Hüllt den Inhalt in einen zentrierten Wrapper mit max. Breite und responsiven horizontalen Polsterungen
// Sorgt dafür, dass alle Seitenabschnitte ein einheitliches Layout haben



interface ContainerProps {
  // Children-Elemente, die innerhalb des Wrappers gerendert werden
  children: React.ReactNode;
  // Zusätzliche CSS-Klassen, um das Standard-Layout zu erweitern
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5  ${className}`}
    >
      {children}
    </div>
  );
};