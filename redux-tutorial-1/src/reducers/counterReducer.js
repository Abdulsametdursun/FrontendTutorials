export const CHANGE = 'CHANGE'
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

const initialState = {
  counter: 0,
}

export default function counterReducer(state = initialState, action) {
  console.log('>> COUNTER REDUCER CALLED', state, action)

  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        counter: action.payload.counter,
      }

    case INCREASE:
      return {
        counter: state.counter + 1,
      }

    case DECREASE:
      return {
        counter: state.counter - 1,
      }

    default:
      return state
  }
}

