interface ButtonLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const ButtonLink = ({ href, text, className="" }: ButtonLinkProps) => {
  return (
   <a href={href}
   className={`px-6 py-3 rounded-full outline-none relative border bg-violet-600 cursor-pointer transform transition duration-300 hover:scale-[1.05] origin-center ${className}`}>
    <span className="relative z-10 text-white">{text}</span>
   </a>
  );
};