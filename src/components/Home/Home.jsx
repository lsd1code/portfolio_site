import { useState } from "react"

function Home() {
  return (
    <div className="h-svh" id="home">
      <Navbar/>
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between md:py-7 py-2">
      <div className="logo">
        <a href="#home"><p>lsd1code</p></a>
      </div>

      <button className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>navbar</button>

      <ul className={`absolute top-0 ${!isOpen ? "left-[-350px]" : "left-0 text-2xl space-y-6"} h-svh w-80 bg-gray-500 p-5 mobile-nav-items`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <ul className="md:flex gap-5 nav-items hidden">
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About Me</li></a>
        <a href="#portfolio"><li>Portfolio</li></a>
        <a href="#contact"><li>Contact Me</li></a>
      </ul>
    </nav>
  )
}

export default Home