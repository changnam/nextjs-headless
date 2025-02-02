import Announcement from "./Announcement";
import Alarm from "./Alarm";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="header" className="flex flex-col w-full justify-between items-stretch">
      <div id="announcement" className="block ">
        <Announcement/>
      </div>
      <div id="alarm" className="block">
       <Alarm/>
      </div>
      <div id="navbar" className="block ">
        <Navbar/>
       </div>
    </header>
  );
}