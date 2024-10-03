"use client"

import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"



const Heading = () => {

 
  const {isAuthenticated , isLoading} = useConvexAuth();


  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
        Turn Ideas into Actions with the Power of {" "}
        <span className="underline">Smaran</span>
        </h1>

        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Smaran is a tool to organize your ideas and manage your task.
        </h3>
        { isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'> Smaran Ideas!
          <ArrowRight className="h-4 w-4 ml-2 mt-[3px]"/>
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
            <Button>
              Smaran Ideas !
              <ArrowRight className="h-4 w-4 ml-2 mt-[3px]"/>
            </Button>
          </SignInButton>
        )

      }
      
    </div>
  )
}

export default Heading
