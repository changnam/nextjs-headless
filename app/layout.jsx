'use client';

// app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider attribute="class">
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}