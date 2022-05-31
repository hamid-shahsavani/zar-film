module.exports = {
  darkMode: 'class',
  content: ["./public/*.html"],
  safelist: [
    '!stroke-[#eb8307]',
    '!opacity-100',
    '!right-0',
    '!visible',
    '!right-[58px]',
    '!mb-2',
    '!mt-5',
    '!mt-4',
    '!h-auto',
    '!space-y-3',
    '!rotate-180',
    '!border-[#E88209]',
    '!bg-[#E88209]',
    '!right-[3px]'
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'sans': ['Vazirmatn, sans-serif'],
      },
    },
  },
  plugins: [],
};