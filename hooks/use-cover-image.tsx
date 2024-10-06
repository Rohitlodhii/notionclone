import {create} from 'zustand'


type coverImageProps = {
    isOpen : boolean;
    onOpen: () => void ;
    onClose : () => void;

};

export const useCoverImage = create<coverImageProps>((set) => ({
    isOpen : false,
    onOpen : () => set({ isOpen : true }),
    onClose : () => set({ isOpen : false})
}))