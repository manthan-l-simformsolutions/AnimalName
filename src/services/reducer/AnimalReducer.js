import { SHOW_CATS } from '../actions/constant'
import { SHOW_DOGS } from '../actions/constant'
import { SHOW_HORSES } from '../actions/constant'
import { SHOW_EAGLES } from '../actions/constant'

const initialState = {
    Cats: [
        { id: 1, name: "cat1" },
        { id: 2, name: "cat2" },
        { id: 3, name: "cat3" },
    ],
    Dogs: [
        { id: 1, name: "dog1" },
        { id: 2, name: "dog2" },
        { id: 3, name: "dog3" },
    ],
    Horse: [
        { id: 1, name: "horse1" },
        { id: 2, name: "horse2" },
        { id: 3, name: "horse3" },
    ],
    Eagle: [
        { id: 1, name: "eagle1" },
        { id: 2, name: "eagle2" },
        { id: 3, name: "eagle3" },
    ],
}

const AnimalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CATS:
            return { ...state, ...state.Cats }
        case SHOW_DOGS:
            return { ...state, ...state.Dogs }
        case SHOW_HORSES:
            return { ...state, ...state.Horse }
        case SHOW_EAGLES:
            return { ...state, ...state.Eagle }

        default:
            return state;
    }
}


export default AnimalReducer;