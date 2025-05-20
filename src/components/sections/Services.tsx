import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
    return(
        <section id="services">
<Container className="space-y-10 md:space-y-12">
<div className="text-center max-w-3xl mx-auto space-y-4">
<Title>AI for Science</Title>
<Paragraph>Harness the power of deep learning, neural networks, and computational modeling to accelerate discovery.
    Our solutions include:
</Paragraph>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
    {services.map((service, key) =>(
        <Service
        key={key}
        title={service.title}
        description ={service.description}
        icon ={service.icon} />
    ))}
</div>
</Container>
        </section>
    );
}