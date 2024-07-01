import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransformedPost, transformPosts } from "../utils/transformPosts";


interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchPost = async (id: string): Promise<TransformedPost> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: Post = response.data;
    const [transformPost] = transformPosts([post]);
    return transformPost;
};

export const usePost = (id: string) => {
    return useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id)
    });
};