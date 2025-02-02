'use client';

// app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
// import { ThemeProvider } from '@/context/ThemeContext';
import { GlobalContextProvider,useGlobalContext } from '@/components/GlobalContextProvider';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
// import { useEffect, useState } from 'react';
// import ButtonAppBar from '@/components/mui/ButtonAppBar';
// import ResponsiveAppBar from '@/components/mui/ResponsiveAppBar';
// import PrimarySearchAppBar from '@/components/mui/PrimarySearchAppBar';

export default function RootLayout({ children }) {

  // const resizeObserver = new ResizeObserver(() => {
  //   if (window.innerWidth <= 640) {
  //     console.log("Mobile view");
  //   } else if (window.innerWidth <= 768) {
  //     console.logalert("Tablet View");
  //   } else  {
  //     console.logalert("Desktop view");
  //   }
  // });
  // resizeObserver.observe(document.body);
  
  
  return (
    <html lang="en" suppressHydrationWarning>      
      <body className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto">
          <NextThemeProvider attribute="class">
            <GlobalContextProvider>
            {/*<ThemeProvider>*/}
             {/*<ResponsiveAppBar />*/}
              <Header />
              {children}
              <Footer />
            {/*</ThemeProvider>*/}
            </GlobalContextProvider>  
          </NextThemeProvider>
        </main>
      </body>
    </html>
  );
}