"use client"

import { createContext, useContext, type ReactNode } from "react"
import { type PersonalInfo, DEFAULT_PERSONAL_INFO } from "@/lib/personal-info"

type PersonalInfoContextType = {
    personalInfo: PersonalInfo
}

const PersonalInfoContext = createContext<PersonalInfoContextType>({
    personalInfo: DEFAULT_PERSONAL_INFO,
})

export function PersonalInfoProvider({
    children,
    initialData,
}: {
    children: ReactNode
    initialData: PersonalInfo
}) {
    return <PersonalInfoContext.Provider value={{ personalInfo: initialData }}>{children}</PersonalInfoContext.Provider>
}

export function usePersonalInfo() {
    return useContext(PersonalInfoContext)
}
