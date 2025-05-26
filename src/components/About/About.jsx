function About() {
  return (
    <div className="md:h-auto border-2 border-gray-600/50 rounded-md md:px-4 py-10 md:flex justify-between gap-5 place-content-center" id="about">
      <div className="text-content basis-2/3">
        <h2 className="py-2 text-3xl text-[#F35034]">About Me</h2>
        <div className="space-y-5">
          <p> 
            I’m Lesedi Thibile, a bridge-builder between people and technology. With an HR diploma and a passion for understanding human needs, I’ve spent years fostering collaboration and solving workplace challenges. Now, I’m channeling that same curiosity into backend development, where I craft the systems that empower seamless user experiences.
          </p>
          <p>
            My background in HR taught me how to listen, adapt, and solve problems empathetically, skills I now apply to writing clean, scalable code in Java and JavaScript, designing APIs, and optimizing databases.
          </p>
          <p>
            What makes me unique? I don’t just code, I code with intent. My blend of people-centric thinking and technical rigor ensures I build solutions that are both efficient and user-aware. Whether it’s streamlining data pipelines or troubleshooting server-side logic, I thrive where logic meets human impact.
          </p>
          <p>
            If you’re looking for a developer who sees tech through the lens of teamwork and clarity, let’s connect. I’d love to discuss how I can turn complex problems into simple, robust solutions for your team.
          </p>
        </div>
      </div>
      <div className="video-content basis-1/3">
        Video goes here
      </div>
    </div>
  )
}

export default About