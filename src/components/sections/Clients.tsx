import { Container } from "../shared/Container"
import { Title } from "../shared/Title"

// Brands.tsx

const logos = ["bayer", "bostondyn", "esa", "stanford","nanya","openal","stem"];
export const Clients = () => {
    return(
        <section>
            <Container className="space-y-8">
<div className="text-center max-w-3xl mx-auto">
    <Title>
        Empowering Scientists Worldwide
    </Title>
</div>
<div className="flex justify-center flex-wrap gap-4">
     {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`/assets/logos/${logo}.png`}
                width="100"
                height="60"
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}

</div>
            </Container>
        </section>
    )
}