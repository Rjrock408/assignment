import Body from "./components/Body";
import Method from "./components/Method";
import Navbar from "./components/Navbar";
import Rightsidebar from "./components/Rightsidebar";
import Sidebar from "./components/Sidebar";
import Sidebaropen from "./components/Sidebaropen";
import Structure from "./components/Structure";
import Technical from "./components/Technical";
import Threadbuilder from "./components/Threadbuilder";
import data from "./assets/data";
import { useState } from "react";

export default function App() {
  const [showComponent, setShowComponent] = useState(true);

  function toggleSwitch() {
    setShowComponent(!showComponent);
  }
  console.log(showComponent);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <h1 className="absolute left-[187px] top-[108px] h-[42px] w-[466px] text-[1.8rem] font-bold font-sans text-[#0029FF]">
        {data.title}
      </h1>
      <div>
        <button className="absolute right-[270px] top-[108px] w-[121px] h-[36px] rounded-xl bg-[#0029FF] flex j items-center justify-center">
          <p className="absolute text-white text-sm font-medium">Submit task</p>
        </button>
      </div>
      <Rightsidebar />
      <Body data={data} />
      {/* Four elements of body */}
      <Technical data={data} />
      <Threadbuilder data={data} />
      <Structure data={data} />
      <Method data={data} />
      {/* Main Heading */}
      {data.assets}
      {/* Sidebar */}
      <div>
        {showComponent ? (
          <Sidebar toggle={toggleSwitch} />
        ) : (
          <Sidebaropen data={data} toggle={toggleSwitch} />
        )}
      </div>
    </>
  );
}
