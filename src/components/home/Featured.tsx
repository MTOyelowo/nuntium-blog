import { FC } from "react";
import ArticleDetails from "../common/ArticleDetails";
import { IArticleProps } from "../../app/types/ArticleProps";
import { Link } from "react-router-dom";

interface Props {
  article: IArticleProps;
  position: string;
}

const Featured: FC<Props> = ({ article, position }): JSX.Element => {
  return (
    <div className="relative">
      <Link to={`/post/${article.slug}`}>
        <img
          src={article.thumbnail}
          alt="Article Image"
          className="w-full aspect-video lg:aspect-auto lg:h-[592px]"
        />
        <div
          className={`bg-main flex w-[509px] h-[483px] px-10 items-center justify-center absolute ${position}`}
        >
          <ArticleDetails withThumbnail={false} article={article} />
        </div>
      </Link>
    </div>
  );
};

export default Featured;
