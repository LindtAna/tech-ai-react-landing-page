// Ein universell einsetzbarer Button mit interaktiven Hover- und Fokus-Effekten
// Kann in Call-to-Action-Sektionen, Formularen oder überall dort genutzt werden,
// wo ein klickbares Element im Button-Stil benötigt wird

interface ButtonProps {
  className?: string; // Erlaubt das Hinzufügen weiterer Tailwind-Klassen
  children: React.ReactNode;
  onClick?: () => void; // Optionaler Klick-Handler, um auf Benutzerinteraktionen zu reagieren
}

export const Button = ({ onClick, children, className="" }: ButtonProps) => {
  return (
    // das semantische Element für klickbare Aktionen
   <button onClick={onClick}
   className={`group px-6 py-3 rounded-full outline-none cursor-pointer
              relative overflow-hidden border border-violet-600 bg-violet-600  text-white hover:bg-white hover:text-violet-600 transition-colors duration-300 ${className}`}>
    {children}
   </button>
  );
};