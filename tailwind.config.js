/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "grid",
    "gap-8",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-3",
    "flex",
    "flex-col",
    "md:flex-row",
    "min-h-screen",
    "max-w-7xl",
    "mx-auto",
    "px-6",
    "py-16",
    "text-center",
    "font-extrabold",
    "rounded-full",
    "bg-\\[\\#2FB7B5\\]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
