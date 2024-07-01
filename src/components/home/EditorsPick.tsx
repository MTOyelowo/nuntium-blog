import { FC } from "react";

import ArticleDetails from "../common/ArticleDetails";
import { TransformedPost } from "../../app/utils/transformPosts";

interface Props {
  editorPicks: TransformedPost[];
}

const EditorsPick: FC<Props> = ({ editorPicks }): JSX.Element => {
  return (
    <div className="w-full max-w-[900px] flex flex-col items-center justify-center gap-[34px] lg:gap-[54px]">
      <div className="w-fit flex flex-col gap-[8px] lg:gap-[17px] items-center justify-center">
        <h1 className="font-bold text-[30px] lg:text-[42px] leading-[38px] lg:leading-[58px]">
          Editor's Picks
        </h1>
        <div className="w-[76%] border-[3px] lg:border-[5px] border-secondary" />
      </div>
      <div className="flex flex-col gap-[30px] lg:gap-[50px]">
        {editorPicks.map((item, index) => (
          <ArticleDetails key={index} article={item} withThumbnail={true} />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
