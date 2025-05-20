import { Button } from "../shared/Button"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"

export const CTA = () => {
    return(
        <section className="pb-6 relative">
<Container>
    <div className="relative rounded-2xl overflow-hidden">
<div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1 leading-[1.4]"> Supercharge Your 
        <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-500">Scientific AI Discovery</span></h1>
        <Paragraph className="pt-10">Deploy our AI-powered platform to transform your scientific workflow. Gain cutting-edge data analysis and automation at your fingertips.</Paragraph>
        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white hover:text-violet-600">
            <Button>Get Tech AI</Button>
        </div>
</div>
    </div>
</Container>
        </section>
    )
}