import { FC } from "react";
import { Link } from "react-router-dom";
import { TransformedPost } from "../../app/utils/transformPosts";
import { truncateText } from "../../app/utils/truncateText";

interface Props {
  article: TransformedPost;
}

const ArticleListItem: FC<Props> = ({ article }): JSX.Element => {
  const { author, category, id, body, date, title, thumbnail } = article;
  return (
    <>
      <Link
        to={`/post/${id}`}
        className="flex flex-col lg:flex-row gap-5 lg:gap-[37px]"
      >
        <img
          src={thumbnail}
          alt="Article Image"
          className="w-full lg:w-[237px] aspect-video lg:h-[177px]"
        />
        <div className="flex flex-col">
          <h3 className="text-sm lg:text-xl text-secondary opacity-50 uppercase">
            {category}
          </h3>
          <h1 className="text-[20px] lg:text-[33px] leading-[25px] lg:leading-[40px] font-libre font-bold text-primary">
            {truncateText(title, 40)}
          </h1>
          <div className="flex text-secondary opacity-50 mt-[3px] mb-[14px] gap-[10px]">
            <span className="text-sm lg:text-base mt-1">{author}</span>
            &#9679;
            <span className="text-sm lg:text-base mt-1">{date}</span>{" "}
          </div>
          <p className="text-sm lg:text-base text-primary">
            {truncateText(body, 100)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ArticleListItem;
