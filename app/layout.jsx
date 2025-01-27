// app/layout.js
import { logger } from "@/lib/logger";
const log = logger.child({ module: "app/layout" });
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  log.debug("RootLayout called");
  getCaller();
  log.debug("RootLayout returning");
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

function getCaller() {
  const error = new Error();
  const stack = error.stack.split('\n');
  // The first line is the current function, the second one is the caller.
  log.debug(stack[2].trim()); // Stack[2] will be the caller
}
