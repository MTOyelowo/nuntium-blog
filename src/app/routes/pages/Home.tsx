import { FC } from "react";
import EditorsPick from "../../../components/home/EditorsPick";
import Featured from "../../../components/home/Featured";

import ArticlesList from "../../../components/home/ArticlesList";
import { usePosts } from "../../hooks/usePosts";
import HeroSkeleton from "../../../components/skeletons/HeroSkeleton";
import EditorsPickSkeleton from "../../../components/skeletons/EditorPicksSkeleton";
import ArticleListSkeleton from "../../../components/skeletons/ArticlesListSkeleton";
import Separator from "../../../components/common/Separator";

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  const page = 1;
  const limit = 10;
  const { data: posts, error, isLoading } = usePosts(page, limit);

  return (
    <main className="px-[25px]">
      <section>
        {isLoading ? <HeroSkeleton /> : null}

        {!isLoading && !error && posts ? (
          <Featured
            article={posts[0]}
            position="lg:-top-[1px] lg:left-[45px]"
          />
        ) : null}
      </section>

      <section className="flex items-center justify-center mx-auto mt-[50px]">
        {isLoading ? <EditorsPickSkeleton /> : null}

        {!isLoading && !error && posts ? (
          <EditorsPick editorPicks={posts.slice(0, 4)} />
        ) : null}
      </section>
      <Separator />
      <section className="mt-[62px]">
        {isLoading ? <HeroSkeleton /> : null}

        {!isLoading && !error && posts ? (
          <Featured article={posts[1]} position="top-[54px] right-[78px]" />
        ) : null}
      </section>
      <Separator />
      <section className="flex items-center justify-center mx-auto mt-[94px] mb-[76px]">
        {isLoading ? <ArticleListSkeleton /> : null}
        {!isLoading && !error && posts ? (
          <ArticlesList articles={posts.slice(0, 4)} />
        ) : null}
      </section>
    </main>
  );
};

export default Home;
