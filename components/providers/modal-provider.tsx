"use client"

import React from "react"
import { useEffect , useState } from "react"
import SettingsModal from "../modals.tsx/settings-modal"
import { CoverImageModal } from "../modals.tsx/cover-image-model"


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
            <CoverImageModal/>
        </>
    );
}