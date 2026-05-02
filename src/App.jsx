import React from "react";
import { Navbar } from "./component/layout/Navbar";
import { Hero } from "./component/sections/Hero";
import { About } from "./component/sections/About";
import { Skill } from "./component/sections/Skill";
import { Project } from "./component/sections/Project";
import { Services } from "./component/sections/Services";
import { Testimonials } from "./component/sections/Testimonials";
import { Contact } from "./component/sections/Contact";
import { Footer } from "./component/layout/Footer";

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Skill />
        <Project />
        <Services />
        <Testimonials />
        <Contact />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;