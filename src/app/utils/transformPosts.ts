import { faker } from "@faker-js/faker";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface TransformedPost extends Post {
    category: string;
    author: string;
    date: string;
    readTime: number;
    thumbnail: string;
}

const categories = ["Technology", "Open Source", "JavaScript", "Minimalism", "Self-help", "Animals", "Herbivores", "HTML", "CSS", "PHP", "Web Technologies", "Career", "Life", "Spirituality", "Food", "Cooking", "Sports", "Racing", "Mountain Hiking", "Cruising"];
const authors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const transformPosts = (posts: Post[]): TransformedPost[] => {
    return posts.map(post => ({
        ...post,
        category: getRandomItem(categories),
        author: getRandomItem(authors),
        date: faker.date.past({}).toISOString().split('T')[0],
        readTime: Math.floor(Math.random() * 10) + 1,
        thumbnail: faker.image.url()

    }))
}