import { FC } from "react";
import EditorsPick from "../../../components/home/EditorsPick";
import Featured from "../../../components/home/Featured";
import { IArticleProps } from "../../types/ArticleProps";
import ArticlesList from "../../../components/home/ArticlesList";

interface Props {}

const featured: IArticleProps = {
  slug: "worlds-most-dangerous-technology-ever-made",
  author: "Ralph Hawkins",
  category: "FEATURED ARTICLE",
  date: new Date(),
  content:
    "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.",
  readTime: "10",
  title: "World’s Most Dangerous Technology Ever Made.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2023/06/22/16/34/campfire-8081877_1280.jpg",
};

const Home: FC<Props> = (): JSX.Element => {
  return (
    <>
      <section>
        <Featured article={featured} position="-top-[1px] left-[45px]" />
      </section>
      <section className="mx-auto">
        <EditorsPick />
      </section>
      <section>
        <Featured article={featured} position="top-[54px] right-[78px]" />
      </section>
      <section className="mx-auto mt-9">
        <ArticlesList />
      </section>
    </>
  );
};

export default Home;
