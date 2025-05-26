import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="w-full bg-[#262626] text-[#C0C0C0] md:px-10 px-3.5">
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-2 border-gray-600/50 rounded-md mt-4 px-4 text-[.6rem] md:text-[.75rem] py-3 flex content-center justify-between opacity-80">
      <span className="logo">
        <a href="#home">lsd1code</a>
      </span>
      <span className="copyright">copyright &copy; {new Date().getFullYear()}</span>
      <span className="socials space-x-2">
        <span><a target="_blank" href="#">twitter</a></span>
        <span><a target="_blank" href="https://github.com/lsd1code">github</a></span>
        <span><a target="_blank" href="https://www.linkedin.com/in/lesedi-thibile-2655b727b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQrlqrPOvReiivg2TstEdtg%3D%3D">linkedin</a></span>
        <span><a target="_blank" href="mailto:lesedi.xys11@gmail.com">mail</a></span>
      </span>
    </footer>
  )
}

export default App
