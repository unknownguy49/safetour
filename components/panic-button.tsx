"use client";

export function PanicButton() {
  return (
    <a
      href="tel:+919147048510"
      className="fixed z-50 bottom-6 right-6 flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400 animate-pulse"
      style={{ boxShadow: "0 8px 24px 0 rgba(220,38,38,0.18)" }}
      aria-label="Panic Button: Call Emergency"
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 animate-pulse"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 17.232a9 9 0 01-8.464-8.464m1.768-4.768A9 9 0 0117.232 15.232m2.121-2.121a12 12 0 10-13.415 0"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
      Panic
    </a>
  );
}
