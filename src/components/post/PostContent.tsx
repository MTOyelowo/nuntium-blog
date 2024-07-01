import { FC } from "react";
import PostMeta from "../common/PostMeta";
import { TransformedPost } from "../../app/utils/transformPosts";

interface Props {
  article: TransformedPost;
}

const tags: string[] = [];

const PostContent: FC<Props> = ({ article }): JSX.Element => {
  const { author, readTime, date, title, thumbnail, body } = article;
  return (
    <div>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Article Image"
          className="w-full aspect-video lg:aspect-auto lg:h-[592px]"
        />
      ) : null}
      <div className="max-w-[790px] mx-auto lg:px-[69px]">
        <div className="flex flex-col items-center justify-center mt-4 lg:mt-[54px] mb-4 lg:mb-[26px]">
          <h1 className="font-libre text-3xl lg:text-[42px] font-bold lg:leading-[52px] text-center">
            {title}
          </h1>
          <PostMeta author={author} date={date} readTime={readTime} />
          {tags.map((item, index) => (
            <ul>
              <li key={index}>#{item}</li>
            </ul>
          ))}
        </div>
        <p className="text-base">{body}</p>
      </div>
    </div>
  );
};

export default PostContent;
