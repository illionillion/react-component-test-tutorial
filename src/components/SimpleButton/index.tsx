import type { FC, ReactNode } from "react";
import './index.css'

interface SimpleButtonProps {
    children: ReactNode
    isDisabled?: boolean
    onClick: () => void
}

export const SimpleButton:FC<SimpleButtonProps> = ({children, isDisabled, onClick}) => {
    return <button onClick={onClick} className="simple-button" disabled={isDisabled}>{children}</button>
}