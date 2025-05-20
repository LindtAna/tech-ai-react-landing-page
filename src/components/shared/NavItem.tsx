interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="inline-block duration-300 font-medium ease-linear hover:text-primary py-3  hover:text-indigo-600 transform transition hover:scale-[1.10]"
      >
        {text}
      </a>
    </li>
  );
};