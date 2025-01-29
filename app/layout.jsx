'use client';

// app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import ButtonAppBar from '@/components/mui/ButtonAppBar';
import ResponsiveAppBar from '@/components/mui/ResponsiveAppBar';
import PrimarySearchAppBar from '@/components/mui/PrimarySearchAppBar';

export default function RootLayout({ children }) {
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  
  return (
    <html lang="en">
      <body>
        <NextThemeProvider attribute="class">
          <ThemeProvider>
            <PrimarySearchAppBar />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}