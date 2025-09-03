// Rendert die „Pricing Plans“-Sektion mit responsivem Grid-Layout
// Stellt verschiedene Abo-Modelle dar
// Jeder Plan wird aus den Daten in `pricingPlans` generiert und erhält bei Bedarf ein Highlight-Badge.


import { pricingPlans } from "../../utils/pricing-plan"; //Daten-Array mit Plan-Definitionen importieren 
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Button } from "../shared/Button";

export const Pricing = () => {
    return (
        <section id="pricing" className="py-5">
            {/* Überschrift und Einleitung zentriert */}
            <Container className="text-center">
                <Title>Pricing Plans</Title>
                <Paragraph className="mt-4">Choose the solution that fits your lab, institution, or R&D team.</Paragraph>
            </Container>

            {/* Grid mit drei Spalten auf mittleren und größeren Bildschirmen */}
            <Container className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {pricingPlans.map((plan, key) => (
                    <div key={key} className="relative group h-full">
                         {/* Farbverlauf-Rahmen um den Plan-Container */}
                        <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                            <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative">

                                    {/* Falls marked als Best Value, Badge oberhalb zentriert anzeigen */}
                                {plan.bestValue && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                    text-white text-xs font-bold uppercase tracking-wider
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                                        Best Value
                                    </div>
                                )}
                                {/* Plan-Titel */}
                                <h3 className="text-2xl font-semibold text-heading-1">{plan.title}</h3>
                                {/* Preisangabe und begleitender Kommentar */}
                                <p className="mt-4 text-3xl font-bold text-heading-1">{plan.price}</p>
                                <p className="mt-2 text-l font-bold text-heading-1">{plan.priceComment}</p>
                                {/* Auflistung der Plan-Features mit Häkchen-Icon */}
                                <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                                    {plan.features.map((feature, keyFeatures) => (
                                        <li key={keyFeatures} className="flex items-center gap-2">
                                            <span className="text-primary">☑️</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                 {/* CTA-Button zum Auswählen des Plans */}
                                <div className="mt-8">
<Button className="w-full transform transition-transform duration-300 hover:scale-105 hover:text-violet-600 text-white">
    Choose Plan
    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Container>
        </section>
    )
};