import { Navbar } from "./components/Navbar";
import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader"; 
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import First from "./components/First";
import Se from "./components/Se";
import Work from "./components/Work";

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  }, []);


  return (
    <div>
        {loading ? (
          <div className="flex bg-[#282c34] flex-col items-center justify-center h-screen bg-custom">
            <RingLoader color={'#01fe87'} loading={true} size={200} />
            <h2 className='p-50 mt-15 font-popins' data-text="JulesScript..." >JulesScript...</h2>
          </div>
        ) : (
          <div >
            <First /> 
            <Navbar/>
            <Se />
            <Home />
            <Skills />
            <Work />
        </div>
        )}
    </div>
  );
}

export default App;
