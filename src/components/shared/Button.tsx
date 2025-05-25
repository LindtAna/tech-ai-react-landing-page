interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ onClick, children, className="" }: ButtonProps) => {
  return (
   <button onClick={onClick}
   className={`group px-6 py-3 rounded-full outline-none cursor-pointer
              relative overflow-hidden border border-violet-600 bg-violet-600 hover:bg-white transition-colors duration-300 ${className}`}>
    {children}
   </button>
  );
};