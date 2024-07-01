import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransformedUser, User, transformUser } from "../utils/transformUser";

const fetchUser = async (id: number): Promise<TransformedUser> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user: User = response.data;
    const transformedUser = transformUser(user);
    return transformedUser;
};

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUser(id)
    });
};