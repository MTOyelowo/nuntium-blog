import { FC } from "react";
import TagsList from "../common/TagsList";
import { IArticleProps } from "../../app/types/ArticleProps";
import ArticleListItem from "../common/ArticleListItem";

interface Props {}

const articlesList: IArticleProps[] = [
  {
    category: "Nature",
    slug: "tempor-deserunt-sunt-qui",
    title: "Tempor deserunt Sunt Qui",
    author: "Connie Robertson",
    date: new Date(),
    readTime: "6",
    content:
      "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.",
    thumbnail:
      "https://images.pexels.com/photos/7654136/pexels-photo-7654136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    category: "Plants",
    slug: "cccaecat-anim-eu-qui",
    title: "Occaecat Anim eu Qui",
    author: "Eleanor Williamson",
    date: new Date(),
    readTime: "8",
    content:
      "Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.",
    thumbnail:
      "https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    category: "Food",
    slug: "fugiat-incididunt-voluptate-consequat",
    author: "Bessie Watson",
    title: "Fugiat Incididunt Voluptate Consequat",
    date: new Date(),
    readTime: "7",
    content: "Mollit ea culpa ipsum pariatur eiusmod. Irure et.",
    thumbnail:
      "https://images.pexels.com/photos/21293020/pexels-photo-21293020/free-photo-of-potted-plants-on-either-side-of-an-old-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    category: "Colorful",
    slug: "occaecat-anim-eu-qui",
    author: "Ted Simmmons",
    title: "Occaecat Anim eu Qui",
    date: new Date(),
    readTime: "7",
    content:
      "Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.",
    thumbnail:
      "https://images.pexels.com/photos/21293020/pexels-photo-21293020/free-photo-of-potted-plants-on-either-side-of-an-old-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ArticlesList: FC<Props> = (): JSX.Element => {
  return (
    <div className="flex max-w-[1122px] gap-[120px]">
      <div className="flex flex-col gap-[66px]">
        {articlesList.map((item, index) => (
          <ArticleListItem key={index} article={item} />
        ))}
      </div>
      <TagsList />
    </div>
  );
};

export default ArticlesList;
