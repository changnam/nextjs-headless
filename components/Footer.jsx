// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black dark:bg-white text-white dark:text-black p-2 text-center">
        <p>&copy; {new Date().getFullYear()} Our Store. All rights reserved.</p>
      </footer>
    );
  }