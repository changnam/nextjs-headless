// app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}