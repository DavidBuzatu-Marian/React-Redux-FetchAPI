import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], // all posts got from fetch
    item: {} // single post
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}