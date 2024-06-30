export interface IArticleProps {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: Date;
  readTime: string;
  thumbnail?: string;
  content: string;
}
