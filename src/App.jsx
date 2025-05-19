import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="w-full text-gray-950 md:px-10 px-3.5">
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
    <footer className="text-[.6rem] py-3 flex content-center justify-between opacity-80">
      <span className="logo">
        <a href="#home">lsd1code</a>
      </span>
      <span className="copyright">copyright &copy; {new Date().getFullYear()}</span>
      <span className="socials space-x-2">
        <span><a href="#">twitter</a></span>
        <span><a href="#">github</a></span>
        <span><a href="#">linkedin</a></span>
        <span><a href="#">mail</a></span>
      </span>
    </footer>
  )
}

export default App
