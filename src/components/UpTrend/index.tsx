import React from 'react';

export default function UpTrend({ className, style }: { className: string, style: React.CSSProperties }) {
  return (
    <svg
      width="35"
      height="29"
      viewBox="0 0 35 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M28.7708 9.89581L32.5845 12.7471C32.9043 12.9862 33.3616 12.7724 33.3832 12.3736L34.0234 0.527471C34.0427 0.171202 33.6933 -0.09001 33.357 0.0292425L22.1758 3.99447C21.7994 4.12794 21.7237 4.62703 22.0435 4.86616L25.9399 7.7793L17.5094 17.896L11.7695 14.0694C11.0078 13.5616 9.98434 13.7205 9.41247 14.4354L0 26.2009L2.75621 28.4059L11.1579 17.9038L16.871 21.7125C17.6214 22.2128 18.6283 22.0668 19.2057 21.3739L28.7708 9.89581Z" fill="#29CC97" />
    </svg>
  );
}
