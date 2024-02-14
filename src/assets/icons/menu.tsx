import React from "react";

interface Props {
  // STYLES is format {{ [key]: value }}
  style?: React.CSSProperties;
  color?: string;
  onClick?: () => void;
}

export default function MenuIcon({ style, color, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={style}
      onClick={onClick}
    >
      <path
        fill="none"
        stroke={color ? color : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17h8m-8-5h14m-8-5h8"
      />
    </svg>
  );
}
