import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type sidebarDrawerContextData = UseDisclosureReturn

const sidebarDrawerContext = createContext({} as sidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){

    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])

    return(
        <sidebarDrawerContext.Provider value={disclosure}>
            {children}
        </sidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(sidebarDrawerContext)