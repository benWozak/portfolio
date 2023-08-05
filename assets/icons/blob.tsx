export const Blob = () => (
    <svg 
      id="sw-js-blob-svg" 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    > 
      <defs>
        <linearGradient 
          id="sw-gradient" 
          x1="0" 
          x2="1" 
          y1="1" 
          y2="0"
        >
          <stop id="stop1" stop-color="rgba(53.748, 117.444, 114.066, 1)" offset="0%"></stop>
          <stop id="stop2" stop-color="rgba(77, 209, 202, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path 
        fill="url(#sw-gradient)" 
        d="M20.4,-20.9C26.4,-14.4,31.3,-7.2,31.7,0.4C32,7.9,27.8,15.8,21.8,23C15.8,30.3,7.9,37,0,37C-7.8,36.9,-15.7,30.2,-21.1,23C-26.5,15.7,-29.4,7.8,-28,1.4C-26.5,-5,-20.7,-9.9,-15.3,-16.5C-9.9,-23.1,-5,-31.3,1.1,-32.4C7.2,-33.5,14.4,-27.5,20.4,-20.9Z" 
        width="100%" 
        height="100%" 
        transform="translate(50 50)" 
        style={{transition: "all 0.3s ease 0s"}}
        stroke-width="0" 
        stroke="url(#sw-gradient)">
      </path>
  </svg>
)