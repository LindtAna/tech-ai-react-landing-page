// Verwaltet den Light- und Dark-Mode mit Zustand und persistiert die Auswahl im lokalen Speicher
// Beim Laden passt es automatisch die HTML-Klasse an, um das Theme anzuwenden

import { create } from "zustand";
import { persist } from "zustand/middleware";

// Definiert die möglichen Theme-Werte
type Theme = "light" | "dark";
// Schnittstelle des Stores mit aktuellem Theme und Umschalt-Funktion
interface ThemeStore{
    theme: Theme
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
             // Initialisiert Theme nach Systempräferenz
        theme:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
        // Wechselt zwischen light und dark
        toggleTheme: () => {
            const newTheme: Theme = get().theme === "light" ? "dark" : ("light" as Theme);
            if(typeof document !== "undefined"){
                // Fügt oder entfernt .dark-Klasse am Root-Element
                document.documentElement.classList.toggle(
                    "dark",
                    newTheme === "dark");
            }

            set({theme:newTheme});
        },
    }), {name: "theme", // key im localStorage
        onRehydrateStorage: () => (state) => {
            // Beim Wiederherstellen: synchronisiert HTML-Klasse mit gespeichertem Wert
        if(state?.theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
}
)
);