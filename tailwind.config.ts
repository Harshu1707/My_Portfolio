import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { vanilla:'#FFF8E7', cream:'#F8EED5', earth:'#6B4F3A', deep:'#3E2C23', terracotta:'#A66A4C', sand:'#D8C3A5', gold:'#D6B875' }, fontFamily:{sans:['var(--font-sans)']}, boxShadow:{earth:'0 24px 80px rgba(62,44,35,.18)'} } }, plugins: [] };
export default config;
