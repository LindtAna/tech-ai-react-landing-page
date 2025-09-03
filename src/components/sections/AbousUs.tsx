// Definiert die „About Us“-Sektion der Seite mit responsivem Layout darstellt


import { Container } from "../shared/Container";     // Zentrierter Layout-Wrapper
import AboutUsImg from "/public/assets/about-us.png"; 
import { Title } from "../shared/Title";             // Überschrift-Komponente
import { Paragraph } from "../shared/Paragraph";     // Fließtext-Komponente
import { AboutUsCard } from "../cards/AboutUsCard";  // Karte mit Icon, Titel und Beschreibung

export const AboutUs = () => {
    return (
        <section id="about-us">
            {/* Flex-Container: Bild links, Text rechts */}
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

                {/* Bild-Wrapper: das Bild in fester Höhe, abgerundete Ecken */}
                     <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img
                            src={AboutUsImg}
                            alt="about us image"
                            className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                        />
                    </div>
                </div>
{/* Textbereich: Titel, Absatz und Karten */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col space-y-4">
                {/* Hauptüberschrift */}
                    <Title>AI for Scientific Discovery</Title>
                    {/* Einleitender Absatz */}
                    <Paragraph>We empower researchers with cutting-edge AI to accelerate breakthroughs. Our platform combines advanced algorithms with domain expertise to transform complex data into groundbreaking insights.
                        Join us in pushing the boundaries of science.</Paragraph>
                        {/* Karten-Grid: Mission und Vision */}
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        {/* Mission-Karte + Icon*/}
                        <AboutUsCard
                            title="Mission"
                            description="To accelerate scientific progress through intelligent AI-driven solutions."
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </AboutUsCard>
 {/* Vision-Karte + Icon */}
                        <AboutUsCard
                            title="Vision"
                            description="A future where AI unlocks new frontiers in research and innovation."
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </AboutUsCard>

                    </div>
                </div>
            </Container>
        </section>
    )
}