import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Harshini | AI/ML Software Engineer',
  description: 'Premium AI/ML, Generative AI, full-stack and software engineering portfolio for Harshini.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body>{children}</body></html>;
}
