import {
    BLOG_LOADED,
    BLOG_ERROR,
    LOADING_BLOG
} from "../constants/action-types";
import axios from "axios";

export function getBlog() {
    return dispatch => {
        return axios
            .all([
                axios.get(
                    "/api/blog/v2/pages/?type=blog2.BlogPage&fields=text,published_date"
                ),
                axios.get("/api/blog")
            ])
            .then(
                axios.spread((blogv2, blogv1) => {
                    if (blogv2.status === 200 && blogv1.status === 200) {
                        let blogv2_data = blogv2.data.items.reverse();
                        let blogv1_data = blogv1.data.reverse();
                        let data = [...blogv2_data, ...blogv1_data];
                        dispatch({ type: BLOG_LOADED, payload: data });
                    }
                })
            )
            .catch(error => {
                if (error) {
                    dispatch({ type: BLOG_ERROR, payload: true });
                }
            });
    };
}

export function loadBlog() {
    return dispatch => {
        dispatch({ type: LOADING_BLOG, payload: true });
        dispatch(getBlog());
    };
}
