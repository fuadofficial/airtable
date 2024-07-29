import React, { useReducer } from 'react'
import './Counter.css'
import { ACTIONS, counterReducer } from './CouterReducer'



const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    })

    const { INCREMENT, DECREMENT, RESET, INCREMENTBY, DECREMENTBY } = ACTIONS

    return (
        <div className='counter-container'>
            <div className="heading">
                <h1>{state.count}</h1>
            </div>
            <div className="buttons">
                <button onClick={() => dispatch({ type: INCREMENT })}> INcrement</button>
                <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
                <button onClick={() => dispatch({ type: RESET })}>Reset</button>
                <button onClick={() => dispatch({ type: INCREMENTBY, payload: 10 })}>Increment 10</button>
                <button onClick={() => dispatch({ type: DECREMENTBY, payload: 10 })}>Decrement 10</button>
            </div>
        </div>
    )
}

export default Counter