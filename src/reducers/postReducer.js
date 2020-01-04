import {NEW_POST, FETCH_POSTS} from '../actions/types'

const initalState = {
    items: [],
    item: {}
}

export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}