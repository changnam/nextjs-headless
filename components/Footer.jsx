// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-[#333] text-white p-2 text-center">
        <p>&copy; {new Date().getFullYear()} Our Store. All rights reserved.</p>
      </footer>
    );
  }