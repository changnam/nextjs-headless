import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="header" className="flex flex-col justify-between items-center p-4">
      <div id="announcement" className="block ">
        
      </div>
      <div id="alarm" className="block">
       
      </div>
      <div id="navbar" className="block">
        <Navbar/>
       </div>
    </header>
  );
}