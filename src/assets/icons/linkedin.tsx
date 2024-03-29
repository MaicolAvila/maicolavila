import React from "react";

interface Props {
  className?: string;
  fillColor?: string;
}

export default function LinkedinIcon({ className, fillColor }: Props) {
  return (
    <svg
      width="47"
      height="46"
      viewBox="0 0 47 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_1201_34)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 6.50637C8.5 5.84164 8.76406 5.20413 9.2341 4.7341C9.70413 4.26407 10.3416 4 11.0064 4H35.9909C36.3203 3.99947 36.6466 4.06391 36.9511 4.18964C37.2556 4.31537 37.5323 4.49993 37.7653 4.73273C37.9984 4.96554 38.1833 5.24204 38.3093 5.54638C38.4354 5.85073 38.5002 6.17695 38.5 6.50637V31.4909C38.5004 31.8204 38.4357 32.1467 38.3099 32.4512C38.184 32.7557 37.9993 33.0324 37.7664 33.2654C37.5335 33.4985 37.2569 33.6833 36.9525 33.8093C36.648 33.9354 36.3218 34.0002 35.9923 34H11.0064C10.6771 34 10.3511 33.9351 10.0469 33.8091C9.74273 33.683 9.46637 33.4983 9.23361 33.2654C9.00086 33.0325 8.81627 32.7561 8.69039 32.4518C8.56452 32.1476 8.49982 31.8215 8.5 31.4923V6.50637ZM20.3745 15.4382H24.4368V17.4782C25.0232 16.3055 26.5232 15.25 28.7773 15.25C33.0986 15.25 34.1227 17.5859 34.1227 21.8718V29.8109H29.7495V22.8482C29.7495 20.4073 29.1632 19.03 27.6741 19.03C25.6082 19.03 24.7491 20.515 24.7491 22.8482V29.8109H20.3745V15.4382ZM12.8745 29.6241H17.2491V15.25H12.8745V29.6227V29.6241ZM17.875 10.5618C17.8832 10.9364 17.8166 11.3088 17.679 11.6572C17.5413 12.0057 17.3355 12.3231 17.0735 12.591C16.8115 12.8588 16.4987 13.0716 16.1533 13.2168C15.808 13.3621 15.4371 13.4369 15.0625 13.4369C14.6879 13.4369 14.317 13.3621 13.9717 13.2168C13.6263 13.0716 13.3135 12.8588 13.0515 12.591C12.7895 12.3231 12.5837 12.0057 12.446 11.6572C12.3084 11.3088 12.2418 10.9364 12.25 10.5618C12.2662 9.82662 12.5696 9.12699 13.0953 8.61276C13.621 8.09852 14.3271 7.81057 15.0625 7.81057C15.7979 7.81057 16.504 8.09852 17.0297 8.61276C17.5554 9.12699 17.8588 9.82662 17.875 10.5618Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1201_34"
          x="0.5"
          y="0"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.117647 0 0 0 0 0.184314 0 0 0 0 0.192157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1201_34"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1201_34"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
