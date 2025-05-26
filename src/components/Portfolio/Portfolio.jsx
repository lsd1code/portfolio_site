function Portfolio() {
  return (
    <div className="h-auto my-4 p-3 border-2 border-gray-600/50 rounded-md md:px-4 space-y-2" id="portfolio">
      <h3 className="text-3xl">Projects</h3>
      <Card/>
    </div>
  )
}


function Card() {
  return (
    <div className="border shadow-2xl p-3 border-gray-600/50 rounded-md w-[300px]">
      <a href="https://docs.google.com/presentation/d/1vYc19xrm0LtTfeq8c6Z1pdq-APA1RD2sV0RDS9eOrOM/edit?slide=id.g34e8c2fdca2_0_0#slide=id.g34e8c2fdca2_0_0" target="_blank" className="cursor-pointer">
        <p className="text-[1.2rem]">Ithuba<span className="text-orange-600">Link</span></p>
        <p className="py-2">AI Job Matching application helps young South Africans from colleges find work in growing industries like renewable energy and tech. The platform aims to connect graduates and young job seekers with employers in high-demand sectors. It is designed to address systemic barriers like skills mismatch, spatial inequality, and limited SME  engagement, the platform prioritizes accessibility, transparency, and actionable outcomes for marginalized  communities
        </p>
        {/* <video src="https://drive.google.com/file/d/1i-4fCy6glMYb8IwcCz_Ghgut9URLL3dE/view">Video Presenation</video> */}
      </a>
    </div>
  )
}

export default Portfolio