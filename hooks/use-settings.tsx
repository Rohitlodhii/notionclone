import {create} from 'zustand'

type SettingsStore=  {
    isOpen : boolean ;
    onOpen : () => void;
    onClose: ()=> void;
}

export const useSettings = create<SettingsStore>((set)=> ({
    isOpen : false ,
    onClose: () => set({isOpen : false}),
    onOpen: ()=> set({isOpen : true})
}))