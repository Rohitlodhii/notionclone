import Footer from "./_components/footer"
import Heading from "./_components/heading"
import Heros from "./_components/heros"


const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-zinc-900">
      <div className="flex  flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">

        <Heading/>
        <Heros/>
        
      </div>  
      
        <Footer/>
      

    </div>
  )
}

export default LandingPage
