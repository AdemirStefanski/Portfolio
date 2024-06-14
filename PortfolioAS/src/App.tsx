import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

import Navbar from "@/scenes/navbar/index.tsx"
import Home from "@/scenes/home/index.tsx"
import About from "@/scenes/about/index.tsx"



function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[]);

  return (
    
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
    </div>
      
    
  )
}

export default App
