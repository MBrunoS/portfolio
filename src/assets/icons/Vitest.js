import * as React from "react";
const SvgVitest = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={290}
    height={290}
    fill="none"
    viewBox="0 0 165 165"
    {...props}
  >
    <g clipPath="url(#vitest_svg__a)" filter="url(#vitest_svg__b)">
      <path
        fill="#FCC72B"
        d="m120.831 57.254-36.138 52.251a3.111 3.111 0 0 1-5.123-.008 3.079 3.079 0 0 1-.533-1.891l1.446-28.848-23.349-4.952A3.103 3.103 0 0 1 54.9 71.93a3.075 3.075 0 0 1 .33-2.895l36.138-52.25a3.117 3.117 0 0 1 3.552-1.179c.64.215 1.19.632 1.57 1.187.38.556.568 1.22.534 1.891l-1.447 28.848 23.349 4.952c.499.106.964.332 1.354.66a3.076 3.076 0 0 1 .551 4.112z"
      />
      <path
        fill="#729B1B"
        d="M82.987 153.343a7.296 7.296 0 0 1-5.175-2.143l-34.146-34.144a7.315 7.315 0 0 1 5.178-12.477 7.32 7.32 0 0 1 5.17 2.129l28.973 28.97 63.118-63.115a7.316 7.316 0 0 1 10.347 10.347L88.16 151.2a7.288 7.288 0 0 1-5.173 2.143"
      />
      <path
        fill="#729B1B"
        fillOpacity={0.5}
        d="M82.957 153.343a7.296 7.296 0 0 0 5.175-2.143l34.146-34.144a7.313 7.313 0 0 0-.014-10.333 7.32 7.32 0 0 0-10.334-.015l-28.973 28.97L19.84 72.563A7.317 7.317 0 0 0 9.49 82.91l68.293 68.29a7.29 7.29 0 0 0 5.173 2.143"
      />
    </g>
    <defs>
      <clipPath id="vitest_svg__a">
        <path fill="#fff" d="M0 0h165v165H0z" />
      </clipPath>
      <filter
        id="vitest_svg__b"
        width={167.163}
        height={153.9}
        x={1.39}
        y={10.443}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={3} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_301_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_301_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgVitest;
