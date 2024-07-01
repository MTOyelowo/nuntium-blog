import { FC } from "react";
import { ChevronLeft, ChevronRight } from "../../assets/svg";
import { TransformedPost } from "../../app/utils/transformPosts";
import { Link } from "react-router-dom";
import { truncateText } from "../../app/utils/truncateText";

interface Props {
  prevPost: TransformedPost | null;
  nextPost: TransformedPost | null;
}

const PostFooter: FC<Props> = ({ prevPost, nextPost }): JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      {/* Prev Post */}
      <div className="flex gap-[14px] lg:gap-[34px]">
        {prevPost ? (
          <>
            <Link
              to={`/post/${prevPost.id}`}
              className="flex w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] bg-secondary items-center justify-center"
            >
              <ChevronLeft className="w-[23px] h-[33px] lg:w-[63px] lg:h-[83px]" />
            </Link>
            <div className="flex items-center justify-center text-xl text-primary font-libre">
              <span className="text-sm lg:text-base">Go back </span>
              <span className="hidden lg:flex font-bold">
                : {truncateText(prevPost.title, 20)}
              </span>
            </div>
          </>
        ) : (
          <div className="flex w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]"></div> // Empty space for alignment
        )}
      </div>

      {/* Next Post */}
      <div className="flex gap-[14px] lg:gap-[34px]">
        {nextPost ? (
          <>
            <div className="flex items-center justify-center text-xl text-primary font-libre">
              <span className="text-sm lg:text-base">Next up </span>
              <span className="hidden lg:flex font-bold">
                : {truncateText(nextPost.title, 20)}
              </span>
            </div>
            <Link
              to={`/post/${nextPost.id}`}
              className="flex w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] bg-secondary items-center justify-center"
            >
              <ChevronRight className="w-[23px] h-[33px] lg:w-[63px] lg:h-[83px]" />
            </Link>
          </>
        ) : (
          <div className="flex w-[150px] h-[150px]"></div> // Empty space for alignment
        )}
      </div>
    </div>
  );
};

export default PostFooter;
