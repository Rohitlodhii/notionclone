"use client"

import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Cover } from "./ui/cover"
import { HeroScrollDemo } from "./HeroScrol"



const Heading = () => {

 
  const {isAuthenticated , isLoading} = useConvexAuth();


  return (
   
       <div className="  w-full dark:bg-zinc-900 bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.3] relative md:pt-30 pt-32 space-y-4">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <h1 className="text-4xl  font-semibold md:text-4xl lg:text-6xl  max-w-7xl mx-auto text-center mt-6 relative z-20 py-1 bg-clip-text  text-black dark:text-white leading-relaxed md:leading-loose">
        Manage your notes <br /> in <Cover>Breeziness..</Cover>
      </h1>

        <h3 className="text-base text-center mx-auto w-[60%] md:w-full sm:text-sm md:text-base ">
            Smaran is a tool to organize your ideas and manage your task.
        </h3>
        { isAuthenticated && !isLoading && (
        <Button className="group " asChild>
          <Link href='/documents'> Get started
          <ArrowRight className="h-4 w-4 ml-2 mt-[3px] transition group-hover:rotate-[-45deg]"/>
          </Link>
           
            
        </Button>

      )}
      {
        isLoading && (
          <div className="w-full flex items-center justify-center">
          <Spinner size='lg'/>
          </div>
        )
      }
      {
        !isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button className="group" variant='outline'>
              Get Started !
              <ArrowRight className="h-4 w-4 ml-2 mt-[3px] transition group-hover:rotate-[-45deg]"/>
            </Button>
          </SignInButton>
        )

      }


<HeroScrollDemo/>
     
    </div>
  )
}

export default Heading
