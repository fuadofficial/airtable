import React, { useReducer } from 'react'

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment": {
            return count = action.payload
        }
        case "decrement": {
            return count = action.payload 
        }
        case "reset": {
            return count 
        }
        default:
            break;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    })

    // const onIncrement = () => {
    //     dispatch((prev) => prev + 1)
    // }
    // const onDecrement = () => {
    //     dispatch((prev) => prev - 1)
    // }
    // const onReset = () => {
    //     dispatch(0)
    // }
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: -1 })}>INcrement</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
        </div>
    )
}

export default Counter