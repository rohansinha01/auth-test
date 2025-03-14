import Link from "next/link";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface ButtonProps {
    text: string
    link: string
}

const Button: React.FC<ButtonProps> = ({text, link}) => {
  return (
    <Link href={link}>
     
{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        {text}
      </button>
    </Link> 
  
  );
};

export default Button;
