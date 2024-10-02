"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"



const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
        Turn Ideas into Actions with the Power of {" "}
        <span className="underline">Smaran</span>
        </h1>

        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Smaran is a tool to organize your ideas and manage your task.
        </h3>
        <Button>
            Smaran Ideas!
            <ArrowRight className="h-4 w-4 ml-2 mt-[3px]"/>
        </Button>
      
    </div>
  )
}

export default Heading
