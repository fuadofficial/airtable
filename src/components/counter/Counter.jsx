import React, { useReducer } from 'react'
import './Counter.css'

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment": {
            return {
                count: state.count + 1
            }
        }
        case "decrement": {
            return {
                count: state.count - 1
            }
        }
        case "reset": {
            return {
                count: 0
            }
        }
        case "onincrement_by": {
            return {
                count: state.count + action.payload
            }
        }
        case "ondecrement_by": {
            return {
                count: state.count + action.payload
            }
        }
        default:
            break;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    })

    return (
        <div className='counter-container'>
            <div className="heading">
                <h1>{state.count}</h1>
            </div>
            <div className="buttons">
                <button onClick={() => dispatch({ type: 'increment' })}> INcrement</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                <button onClick={() => dispatch({ type: 'onincrement_by', payload: 10 })}>on Increment By</button>
                <button onClick={() => dispatch({ type: 'ondecrement_by', payload: -10 })}>on Decrement By</button>
            </div>
        </div>
    )
}

export default Counter