import { BLOG_LOADED, BLOG_ERROR } from "../constants/action-types";
import axios from "axios";

export function getBlog() {
    return function(dispatch) {
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
