import { Paragraph } from "../shared/Paragraph";

interface AboutUsCardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const AboutUsCard = ({ title, description, children }: AboutUsCardProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl  bg-violet-800 p-3 text-heading-1 w-max relative mb-2">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl mb-2">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
    )
}