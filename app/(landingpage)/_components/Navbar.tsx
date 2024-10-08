"use client"

import { useScrollTop } from "@/hooks/useScrollTop"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar =()=> {

    const { isAuthenticated , isLoading } = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background dark:bg-zinc-900 fixed top-0 flex items-center justify-around w-full p-6" , scrolled && "border-b shadow-sm")}>
           
            <Logo/>
            
            <div className="md:ml-auto  justify-end w-full flex items-center gap-x-2 ">
                {isLoading && (
                    <Spinner/>
                )}
                {
                    !isAuthenticated && !isLoading && (
                        <>
                            
                            <SignInButton mode="modal">
                                <Button  size="sm">
                                   Login
                                    </Button>    
                             </SignInButton>
                        </>
                    )
                }
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button  variant='outline' size='sm' asChild> 
                                <Link href='/documents'>Smaran Ai</Link>
                            </Button>
                            <UserButton afterSwitchSessionUrl="/" />
                        </>
                    )
                }
                <ModeToggle/>
            </div>
        </div>
    )
}