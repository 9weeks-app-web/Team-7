/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard"],
      },
      colors: {
        "primary-white": "#FFFFFF",
        "primary-100": "#0059FF",
        "primary-90": "#196AFF",
        "primary-80": "#337AFF",
        "primary-70": "#4C8BFF",
        "primary-60": "#669BFF",
        "primary-50": "#7FACFF",
        "primary-40": "#99BDFF",
        "primary-30": "#B2CDFF",
        "primary-20": "#CCDEFF",
        "primary-10": "#E5EEFF",
        "neutral-100": "#030303",
        "neutral-90": "#1A1A1A",
        "neutral-80": "#333333",
        "neutral-70": "#4D4D4D",
        "neutral-60": "#666666",
        "neutral-50": "#808080",
        "neutral-40": "#999999",
        "neutral-30": "#B3B3B3",
        "neutral-20": "#CCCCCC",
        "neutral-10": "#E6E6E6",
        "line-blue": "#99BDFF",
        "line-gray-1": "##F3F3F3",
        "line-gray-2": "#E6E6E6",
        "bg-white": "#F5F8FF",
        "bg-gray-1": "#F8F8F9",
        "bg-gray-2": "#B2B2B2",
        "bg-gray-3": "#A9A9A9",
        "bg-gray-4": "#666666",
        "system-red": "#FF0000",
        "system-greem": "#07A320",
      },
      boxShadow: {
        "shadow-1": "0px 0px 30px 0px rgba(0, 0, 0, 0.05)",
        "shadow-2": "0px 3px 13px 0px rgba(0, 0, 0, 0.15)",
        "shadow-3": "4px 4px 16px 0px rgba(0, 0, 0, 0.25)",
        "shadow-4":
          "8px 17px 13px -15px rgba(0, 0, 0, 0.15), 8px -17px 13px -15px rgba(0, 0, 0, 0.07), 15px 0px 13px -10px rgba(0, 0, 0, 0.07)",
      },
      spacing: {
        "s-1": "6px",
        "s-2": "20px",
        "s-3": "30px",
        "s-4": "50px",
      },
    },
  },
  plugins: [],
};
