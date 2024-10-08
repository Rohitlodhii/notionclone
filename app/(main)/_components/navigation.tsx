"use client"

import { cn } from "@/lib/utils"
import { Brain, ChevronLeftIcon,  Home, MenuIcon, Plus, PlusCircle, SearchIcon, Settings, Trash } from "lucide-react"
import { useParams, usePathname, useRouter } from "next/navigation"
import React, { ElementRef, useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import UserSettings from "./user-item"
import { useMutation} from "convex/react"
import { api } from "@/convex/_generated/api"
import {Item} from "./item"
import { toast } from "sonner"
import DocumentList from "./documentlist"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import TrashBox from '@/app/(main)/_components/trashbox'
import { useSearch } from "@/hooks/use-search"
import { useSettings } from "@/hooks/use-settings"
import Navbar from "@/app/(landingpage)/_components/docsNavbar"

import { useAi } from "@/hooks/use-ai"

export const Navigation = () => {

    const params = useParams();
    const settings = useSettings();
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width : 768px)");



    const search = useSearch();

    const router = useRouter();

    const create = useMutation(api.documents.create);




    const isResizingRef  = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);

    const [isResetting ,setIsReseting] = useState(false);
    const [isCollapsed ,setIsCollapsed] = useState(isMobile);

    //The useEffect for the sidebar width if the user turns from large width to the small

    useEffect(()=>{
        if(isMobile) {
            collapse();
        }else {
            resetWidth();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [isMobile])

    useEffect(()=> {
       if(isMobile) {
        collapse();
       } 
    } , [pathname , isMobile]);


    //Mouse Resizing Effect on the sidebars  functions:>

    const handleMouseDown = (
        event : React.MouseEvent<HTMLDivElement , MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true ;
        document.addEventListener("mousemove" , handleMouseMove);
        document.addEventListener("mouseup" , handleMouseUp);

    }

    const handleMouseMove = (event : MouseEvent) => {
        if (!isResizingRef.current) return;

        let newWidth = event.clientX;

        if(newWidth < 240) newWidth =240 ;
        if(newWidth > 480) newWidth =480;

        if(sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.setProperty("left" , `${newWidth}px`)
            navbarRef.current.style.setProperty("width" ,`calc(100% - ${newWidth}px)` );

        }
    }


    const handleMouseUp = () => {
        isResizingRef.current = false ;
        document.removeEventListener("mousemove" , handleMouseMove);
        document.removeEventListener("mouseup" , handleMouseUp);
    }

    const resetWidth = () => {
        if(sidebarRef.current && navbarRef.current ) {
            setIsCollapsed(false);
            setIsReseting(true);

            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100% - 240px)"
            );
            navbarRef.current.style.setProperty(
                "left",
                isMobile ? "100%" : "240px"
            );

            setTimeout(()=> setIsReseting(false) , 300)
        }
    }

    const collapse = () => {
        if(sidebarRef.current && navbarRef.current){
            setIsCollapsed(true);
            setIsReseting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width" , "100%");
            navbarRef.current.style.setProperty("left" , "0");
            setTimeout(()=> setIsReseting(false) , 300);


        }
    }

    //Create the documents from the sidebar functions : 

    const handleCreate = () => {
        const promise = create({ title : "Untitled"})
            .then((documentId) => router.push(`/documents/${documentId}`))
        toast.promise( promise , {
            loading : "Creating a node ...",
            success : "New note created!",
            error : "Failed to create a new node."
        })
    }
   

    const useai = useAi();

    
    





    return (
        <>
       
            <aside ref={sidebarRef} className={cn(
                "group/sidebar h-full bg-secondary overflow-y-hidden relative flex w-60 flex-col z-[99999]",
                isResetting && "transition-all ease-in-out duration-300",
                isMobile && "w-0"
                
                )} >
                   
                   <div 
                   onClick={collapse}
                   role="button"  className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition" ,
                     isMobile && "opacity-100"
                   )}>
                    <ChevronLeftIcon className="h-6 w-6" />
                   </div>
          
            <div>
                <UserSettings/>
                <Item
                    label="Search"
                    icon={SearchIcon}
                    isSearch
                    onClick={search.onOpen}

                />
                <Item
                    label="Settings"
                    icon={Settings}
                    
                    onClick={settings.onOpen}

                />
                <Item
                    onClick={()=>router.push('/documents')}
                    icon={Home}
                    label="Home"
                   />
                <Item
                    onClick={useai.onOpen}
                    icon={Brain}
                    label="Ai create"
                   />
                <Item
                    onClick={handleCreate}
                    label="New Page"
                    icon={PlusCircle}
                />
                
            </div>
            <div className="mt-4">
                   <DocumentList/>
                   
                   <Item
                    onClick={handleCreate}
                    icon={Plus}
                    label="Add a Page"
                   />

                   <Popover>
                    <PopoverTrigger className="w-full mt-4">
                        <Item label="Trash" icon={Trash} />
                    </PopoverTrigger>
                    <PopoverContent side={isMobile ? "bottom" : "right"}
                        className="p-0 w-72"
                    >
                        <TrashBox />
                    </PopoverContent>
                   </Popover>

            </div>
            <div
            onMouseDown={handleMouseDown}
            onClick={resetWidth}
             className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />

            </aside>

            <div ref={navbarRef} className={cn("absolute top-0 z-[9999] left-60 w-[calc(100%-240px)]" ,
                isResetting && "transition-all ease-in-out duration-300",
                isMobile && "left-0 w-full"
            )}>

                {!!params.documentId ? (

                    <Navbar 
                     isCollapsed={isCollapsed}
                     onResetWidth={resetWidth}
                     />  ) : (

                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && 
                    <MenuIcon 
                    onClick={resetWidth}
                    role="button" className="h-6 w-6 text-muted-foreground" />
                    }
                </nav>

                )}
                
            </div>

        </>
    )
}


