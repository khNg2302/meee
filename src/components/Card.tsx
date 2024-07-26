import { ReactNode } from "react"

interface CardI {
    children: ReactNode
}

export const Card = ({children}:CardI) => {
    return <div className="rounded-[3px]">
        {children}
    </div>
}