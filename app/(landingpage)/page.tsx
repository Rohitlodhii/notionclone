import { BackgroundBeamsWithCollisionDemo } from "./_components/bgbeam"
import { WobbleCardDemo } from "./_components/feature"
import Footer from "./_components/footer"
import Heading from "./_components/heading"



const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-zinc-900">
      <div className="flex  flex-col items-center justify-center md:justify-start text-center  flex-1  pb-10">

        <Heading/>
        <WobbleCardDemo/>
       
        
      </div>  
      <BackgroundBeamsWithCollisionDemo/>
       
      

    </div>
  )
}

export default LandingPage
