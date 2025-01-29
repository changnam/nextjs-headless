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
      <body className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto">
          <NextThemeProvider attribute="class">
            <ThemeProvider>
              <ResponsiveAppBar />
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </NextThemeProvider>
        </main>
      </body>
    </html>
  );
}