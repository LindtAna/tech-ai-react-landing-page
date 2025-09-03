// Zeigt zentrale Kennzahlen (KPIs) in einem responsiven Grid-Layout
// Jede Metrik erhält ein eigenes Grid-Item mit Trennlinien und konsistenter Typografie


import { Container } from "../shared/Container" // Wrapper mit einheitlichen Innenabständen

export const Statistics = () => {
    return (
        <section className="relative mt-12 md:mt-16">
            {/* Container zentriert die Grid-Box und schränkt die Breite ein */}
            <Container className="flex justify-center align-center">
                <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4">
                             {/* Einzelne Statistik: Zahl (h2) + Beschreibung (p) */}
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">100+</h2>
                        <p className="mt-2 text-heading-3">AI Models Implemented</p>
                    </div>

                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">250+</h2>
                        <p className="mt-2 text-heading-3">Enterprise Clients</p>
                    </div>

                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">99.9%</h2>
                        <p className="mt-2 text-heading-3">Uptime Guarantee</p>
                    </div>

                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">10+</h2>
                        <p className="mt-2 text-heading-3">Years of Innovation</p>
                    </div>

                </div>
            </Container>

        </section>
    )
}