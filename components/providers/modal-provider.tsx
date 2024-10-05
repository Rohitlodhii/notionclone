"use client"

import React from "react"
import { useEffect , useState } from "react"
import SettingsModal from "../modals.tsx/settings-modal"


export const ModalProvider = () => {

    const [isMounted ,setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true)
    } , []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <SettingsModal />
        </>
    );
}