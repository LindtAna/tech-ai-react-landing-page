// Enthält die Konfiguration der verschiedenen
// Abonnement-Pläne: Titel, Preis, Jahres-Option, Feature-Liste und optionaler Best-Value-Markierung.

/**
 * pricingPlans: Array von Preisplänen für die Pricing-Sektion.
 * - title: Name des Plans
 * - price: Monatlicher Preis
 * - priceComment: Zusätzliche Info
 * - features: Liste der im Plan enthaltenen Leistungen
 * - bestValue?: Wenn true, wird dieser Plan als „Best Value“ hervorgehoben
 */


export const pricingPlans = [
    {
        title: "Academic Starter",
        price: "99£ / month",
        priceComment: "(or 899£ / year)",
        features: [
            "Basic AI-powered data analysis",
            "Automated literature review (up to 100 papers/month)",
            "Standard computational modeling",
            "Email support (48h response time)",

        ],
    },
    {
        title: "Research Pro",
        price: "499£ / month",
        priceComment:"(or 4999£ / year)",
        features: [
            "Advanced ML for predictive modeling",
            "500K processed data points/month",
            "Real-time experimental data analysis",
            "Hypothesis simulation & optimization",
            "API access for custom workflows",
            "Priority support (24h response)",
        ],
        bestValue: true, // Dieser Plan wird optisch als bester Wert hervorgehoben
    },
    {
        title: "Enterprise Science",
        price: "Custom pricing",
        priceComment:"(scalable for large institutions)",
        features: [
            "Unlimited data processing & AI compute",
            "Custom AI model training for domain-specific research",
            "High-performance computing (HPC) integration",
            "Dedicated AI research consultant",
            "24/7 premium support with SLAs",
            "Multi-user collaboration & lab-wide deployment",
        ],
    },
];