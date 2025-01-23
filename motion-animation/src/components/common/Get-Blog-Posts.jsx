import BlogList from "@/components/common/blog-list-post";
import axios from "axios";

export const GetBlogPosts = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.data;

    return posts.map((post) => {
        return <BlogList key={post.id} post={post} />
    });
};