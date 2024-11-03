export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
    INCREMENTBY: "INCREMENTBY",
    DECREMENTBY: "DECREMENTBY",
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT: {
            return {
                count: state.count + 1
            }
        }
        case ACTIONS.DECREMENT: {
            return {
                count: state.count - 1
            }
        }
        case ACTIONS.RESET: {
            return {
                count: 0
            }
        }
        case ACTIONS.INCREMENTBY: {
            return {
                count: state.count + action.payload
            }
        }
        case ACTIONS.DECREMENTBY: {
            return {
                count: state.count - action.payload
            }
        }
        default:
            break;
    }
}