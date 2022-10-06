import React from 'react'

interface downTrendPropType {
  className: string
  style: React.CSSProperties
}
export default function DownTrend ({ className, style }: downTrendPropType): JSX.Element {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.25337 18.5101L1.43968 15.6588C1.11985 15.4197 0.662566 15.6335 0.641017 16.0323L0.000766708 27.8784C-0.018486 28.2347 0.330887 28.4959 0.667156 28.3767L11.8483 24.4114C12.2247 24.278 12.3005 23.7789 11.9806 23.5398L8.08423 20.6266L16.5148 10.5099L22.2546 14.3365C23.0163 14.8443 24.0398 14.6854 24.6117 13.9706L34.0242 2.20497L31.268 -1.66639e-06L22.8663 10.5021L17.1532 6.6934C16.4028 6.19311 15.3958 6.33915 14.8184 7.03202L5.25337 18.5101Z" fill="#FE5461" />
    </svg>
  )
}
