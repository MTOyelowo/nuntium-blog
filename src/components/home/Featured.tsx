import { FC } from "react";
import ArticleDetails from "../common/ArticleDetails";
import { Link } from "react-router-dom";
import { TransformedPost } from "../../app/utils/transformPosts";

interface Props {
  article: TransformedPost;
  position: string;
}

const Featured: FC<Props> = ({ article, position }): JSX.Element => {
  return (
    <div className="">
      <Link
        to={`/post/${article.id}`}
        className="flex flex-col w-full lg:relative gap-5 lg:gap-0"
      >
        <img
          src={article.thumbnail}
          alt="Article Image"
          className="w-full aspect-video lg:h-[592px]"
        />
        <div
          className={`bg-main flex w-full lg:w-[509px] lg:h-[483px] lg:px-10 items-center justify-center lg:absolute ${position}`}
        >
          <ArticleDetails withThumbnail={false} article={article} />
        </div>
      </Link>
    </div>
  );
};

export default Featured;
