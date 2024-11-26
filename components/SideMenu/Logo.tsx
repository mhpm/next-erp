import { memo } from 'react';

export const Logo = memo(() => (
  <div className="flex flex-col items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient
          id="logosPluralsightIcon0"
          x1="49.999%"
          x2="49.999%"
          y1="1.576%"
          y2="100.443%"
        >
          <stop offset="0%" stopColor="#df5430" />
          <stop offset="100%" stopColor="#d7197e" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logosPluralsightIcon0)"
        d="M256 128c0 70.695-57.31 128-128.003 128C57.303 256 0 198.695 0 128S57.303 0 127.997 0C198.69 0 256 57.305 256 128"
      />
      <path
        fill="#fffffe"
        d="M95.092 61.479v133.029l115.207-66.511zm11.029 19.103l82.12 47.415l-82.12 47.414z"
      />
      <path
        fill="#fffffe"
        d="M68.609 76.002v103.983l90.046-51.995zm11.029 19.103l56.966 32.885l-56.966 32.898z"
      />
    </svg>
  </div>
));
