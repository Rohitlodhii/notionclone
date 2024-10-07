"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";



const Error = () => {
   
    return ( 
        <div className="h-screen flex-col flex items-center justify-center gap-4">
            <p>Something Went Wrong!</p>
            <Button size="sm" asChild >
                <Link href='/documents'>Go Back</Link>
            </Button>
        </div>
     );
}
 
export default Error;