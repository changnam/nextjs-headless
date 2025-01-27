'use client';

// app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/global.css';
import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}