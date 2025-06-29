import Navbar from "./component/Navbar";
import HeroSection from "./component/Herosection";
import About from "./component/About";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Experience from "./component/Experience";

function App() {

  return (
    
      <div className="w-full font-sans">
       <Navbar/>
       <HeroSection/>
       <About/>
       <Project/>
       <Experience/>
       <Skills/>
       <Contact/>
       <Footer/>
      </div>
      
   
  )
}

export default App
