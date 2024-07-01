import { FC } from "react";
import { TransformedPost } from "../../app/utils/transformPosts";
import { truncateText } from "../../app/utils/truncateText";

interface Props {
  article: TransformedPost;
  withThumbnail: boolean;
}

const ArticleDetails: FC<Props> = ({ article, withThumbnail }): JSX.Element => {
  const { author, category, body, date, readTime, title, thumbnail } = article;
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-[55px]">
      {withThumbnail && thumbnail ? (
        <img
          src={thumbnail}
          alt="Article Image"
          className="w-full lg:w-[371px] aspect-video lg:h-[298px]"
        />
      ) : null}
      <div className="flex w-full flex-col">
        <h3 className="text-sm lg:text-xl text-secondary opacity-50 uppercase">
          {category}
        </h3>
        <h1 className="text-[20px] lg:text-[33px] leading-[25px] lg:leading-[40px] font-libre font-bold text-primary">
          {truncateText(title, 40)}
        </h1>
        <div className="flex text-secondary opacity-50 mt-[12px] mb-[14px] gap-[10px]">
          <span className="text-sm lg:text-base mt-1">{author}</span>
          &#9679;
          <div className="">
            <span className="text-sm lg:text-base">{date}</span>{" "}
            <span className="text-xs lg:text-sm">{`(${readTime} mins read)`}</span>
          </div>
        </div>
        <p className="text-sm lg:text-base text-primary">
          {truncateText(body, 100)}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
