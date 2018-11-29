
const initialState = {
    tasks: []
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_TASKS':
            return {...state, tasks: action.payload}
        default:
            return state;
    }
}