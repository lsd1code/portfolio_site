import { useState } from "react"

function Home() {
  return (
    <div className="h-svh py-4" id="home">
      <Navbar/>
      <main className="bg-linear-to-r/decreasing from-[#] border-2 border-gray-600/50 md:text-center place-content-center space-y-3 rounded-md md:h-[90%] mt-2 md:px-4">
        <p>Backend Software Engineer</p>
        <h1 className="text-[#F35034] text-6xl">Lesedi Thibile</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus nostrum veniam veritatis beatae quaerat, sit repellat culpa possimus aperiam quae necessitatibus nihil in sed quibusdam inventore minima neque sapiente?</p>
        <button className="bg-[#E63E21] rounded-sm px-6 py-2 shadow-2xl shadow-[#E4643F]">Hire Me</button>
      </main>
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between content-center py-2 md:py-3 border-2 border-gray-600/50 rounded-md md:px-4">
      <div className="logo">
        <a href="#home"><p className="text-[#F35034]">lsd1code</p></a>
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