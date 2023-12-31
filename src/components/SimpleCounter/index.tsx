import type { FC } from "react"
import { useCounter } from "../../hooks/useCounter"
import { SimpleButton } from "../SimpleButton"
import './index.css'

export const SimpleCounter:FC = () => {
    const {count, addCount, minusCount} = useCounter(0)
    return <div className="simple-counter">
        <CountView count={count} />
        <div className="simple-counter__buttons">
            <SimpleButton onClick={addCount}>+</SimpleButton>
            <SimpleButton onClick={minusCount} isDisabled={count <= 0}>-</SimpleButton>
        </div>
    </div>
}

export const CountView:FC<{count: number}> = ({count}) => {
    return <div className="simple-counter__count-view">カウント：<span>{count}</span></div>
}