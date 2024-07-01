import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransformedPost, transformPosts } from "../utils/transformPosts";


interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchPosts = async (page: number, limit: number): Promise<TransformedPost[]> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    const posts: Post[] = response.data;
    return transformPosts(posts);
};

export const usePosts = (page: number, limit: number) => {
    return useQuery({
        queryKey: ["posts", page, limit],
        queryFn: () => fetchPosts(page, limit),
    });
};