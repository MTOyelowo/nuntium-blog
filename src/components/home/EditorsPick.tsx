import { FC } from "react";
import { IArticleProps } from "../../app/types/ArticleProps";
import ArticleDetails from "../common/ArticleDetails";

interface Props {}

const editorPicks: IArticleProps[] = [
  {
    category: "MINIMALISM",
    slug: "culpa-sit-laboris-exercitation-ea-fugiat",
    title: "Culpa sit Laboris Exercitation ea Fugiat",
    author: "Leslie Pena",
    date: new Date(),
    readTime: "6",
    content:
      "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
    thumbnail:
      "https://images.pexels.com/photos/7654136/pexels-photo-7654136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    category: "Technology",
    slug: "amet-non-ex-officia-nulla-cupidatat",
    title: "Amet non Ex Officia nulla Cupidatat",
    author: "Jacob Henry",
    date: new Date(),
    readTime: "8",
    content:
      "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.",
    thumbnail:
      "https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    category: "ARTICLE",
    slug: "dolor-ex-tempor-cotur-culpa-li",
    author: "Darrell Lane",
    title: "Dolor ex Tempor Cotur Culpa li",
    date: new Date(),
    readTime: "7",
    content:
      "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.",
    thumbnail:
      "https://images.pexels.com/photos/21293020/pexels-photo-21293020/free-photo-of-potted-plants-on-either-side-of-an-old-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const EditorsPick: FC<Props> = (): JSX.Element => {
  return (
    <div className="max-w-[900px] flex flex-col items-center justify-center gap-[54px]">
      <div className="w-fit flex flex-col gap-[17px] items-center justify-center">
        <h1 className="font-bold text-[42px] leading-[58px]">Editor's Picks</h1>
        <div className="w-[76%] border-[5px] border-secondary" />
      </div>
      <div className="flex flex-col gap-[50px]">
        {editorPicks.map((item, index) => (
          <ArticleDetails key={index} article={item} withThumbnail={true} />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
