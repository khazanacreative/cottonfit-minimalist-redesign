import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IconHarga: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Price tag icon */}
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    {/* Dollar/price symbol in center */}
    <circle cx="12" cy="12" r="3" />
    <path d="M12 10v4" />
    <path d="M10.5 11.5h3" />
  </svg>
);

export default IconHarga;
