// Definiert das Grundgerüst jeder Seite
// Setzt den HTML-Dokumenttitel, bindet die globale Navigation ein,
// umschließt den Seiteninhalt in einen flexiblen Main-Bereich mit Abstand
// und fügt den Footer hinzu.

/* React-Hook für Seiteneffekte, hier zum Setzen des Dokumenttitels */
import { useEffect } from "react";

import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

/* Props für Layout-Komponente:
   - title: Titel, der im Browser-Tab angezeigt wird
   - children: JSX-Inhalt, der in der Seite gerendert wird */
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
/* Layout-Komponente:
   - Setzt per useEffect den Dokumenttitel, sobald sich die title-Prop ändert
   - Rendert Navbar oberhalb, Footer unterhalb und den Content dazwischen */
export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
    {/* Obere Navigationsleiste, bleibt auf allen Seiten identisch */}
      <Navbar />
{/* Hauptbereich mit vertikalem Abstand zwischen Sektionen.
          overflow-hidden verhindert, dass dekorative Elemente herausragen */}
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
{/* Footer mit Kontakt- und Navigationslinks*/}
<Footer />
    </>
  );
};