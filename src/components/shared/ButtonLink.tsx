// Rendered einen anklickbaren Link im Button-Design
// für Call-to-Action-Links, die sich wie Buttons verhalten und skalieren

interface ButtonLinkProps {
 href: string;         // Ziel-URL
  text: string;         // Anzeigename im Button
  className?: string;   // Zusatz-Styles, falls erforderlich
}

export const ButtonLink = ({ href, text, className="" }: ButtonLinkProps) => {
  return (
   <a href={href}
   className={`px-6 py-3 rounded-full outline-none relative border bg-violet-600 cursor-pointer transform transition duration-300 hover:scale-[1.05] origin-center ${className}`}>
    <span className="relative z-10 text-white">{text}</span>
   </a>
  );
};