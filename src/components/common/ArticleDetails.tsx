import { FC } from "react";
import { IArticleProps } from "../../app/types/ArticleProps";
import { Link } from "react-router-dom";

interface Props {
  article: IArticleProps;
  withThumbnail: boolean;
}

const ArticleDetails: FC<Props> = ({ article, withThumbnail }): JSX.Element => {
  const { author, slug, category, content, date, readTime, title, thumbnail } =
    article;
  return (
    <div className="flex gap-[55px]">
      <Link to={`/post/${slug}`}>
        {withThumbnail && thumbnail ? (
          <img
            src={thumbnail}
            alt="Article Image"
            className="w-[371px] h-[298px]"
          />
        ) : null}
        <div className="flex flex-col">
          <h3 className="text-xl text-secondary opacity-50 uppercase">
            {category}
          </h3>
          <h1 className="text-[33px] leading-[40px] font-libre font-bold text-primary">
            {title}
          </h1>
          <div className="flex text-secondary opacity-50 mt-[12px] mb-[14px] gap-[10px]">
            <span className="text-base">{author}</span>
            <span className="w-3 h-3">&#9679;</span>
            <div>
              <span className="text-base">{date.toISOString()}</span>{" "}
              <span className="text-sm">{`(${readTime} mins read)`}</span>
            </div>
          </div>
          <p className="text-base text-primary">{content}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleDetails;
