export default function RestaurantLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="20" cy="20" r="19" fill="url(#logoGradient)" stroke="url(#strokeGradient)" strokeWidth="1" />

        <g transform="translate(20, 20)">
          <path
            d="M-6 -12 L-6 -4 M-8 -12 L-8 -6 M-4 -12 L-4 -6 M-6 -4 L-6 8"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          <path
            d="M6 -12 L6 8 M4 -12 L6 -12 L8 -10 L6 -8"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <path d="M0 -2 L1 0 L0 2 L-1 0 Z" fill="#1a1a1a" />
        </g>

        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
