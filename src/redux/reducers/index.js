import {
    BLOG_LOADED,
    BLOG_ERROR,
    LOADING_BLOG
} from "../constants/action-types";

const initialState = {
    loadingBlog: false,
    blogData: [],
    blogError: false
};

function rootReducer(state = initialState, action) {
    if (action.type === LOADING_BLOG) {
        return Object.assign({}, state, {
            loadingBlog: true
        });
    }

    if (action.type === BLOG_LOADED) {
        return Object.assign({}, state, {
            blogData: state.blogData.concat(action.payload)
        });
    }

    if (action.type === BLOG_ERROR) {
        return Object.assign({}, state, {
            blogError: true
        });
    }

    return state;
}

export default rootReducer;
