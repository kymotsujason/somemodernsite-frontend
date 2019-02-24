import { BLOG_LOADED, BLOG_ERROR } from "../constants/action-types";

const initialState = {
    blogData: [],
    blogError: false
};

function rootReducer(state = initialState, action) {
    if (action.type === BLOG_LOADED) {
        return Object.assign({}, state, {
            blogData: state.blogData.concat(action.payload)
        });
    }

    if (action.type === BLOG_ERROR) {
        return Object.assign({}, state, {
            blogError: !state.blogError
        });
    }

    return state;
}

export default rootReducer;
