import { FC, ReactNode } from "react";

interface SimpleButtonProps {
    children: ReactNode
    isDisabled?: boolean
    onClick: () => void
}

export const SimpleButton:FC<SimpleButtonProps> = ({children, isDisabled, onClick}) => {
    return <button onClick={onClick} disabled={isDisabled}>{children}</button>
}