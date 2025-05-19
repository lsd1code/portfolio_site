function Home() {
  return (
    <div className="h-svh" id="home">
      <Navbar/>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="flex justify-between py-7">
      <div className="logo">
        <a href="#home"><p>lsd1code</p></a>
      </div>

      <ul className="flex gap-5 nav-items">
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About Me</li></a>
        <a href="#portfolio"><li>Portfolio</li></a>
        <a href="#contact"><li>Contact Me</li></a>
      </ul>
    </nav>
  )
}

export default Home