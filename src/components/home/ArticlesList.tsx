import { FC } from "react";
import TagsList from "../common/TagsList";
import ArticleListItem from "../common/ArticleListItem";
import { TransformedPost } from "../../app/utils/transformPosts";

interface Props {
  articles: TransformedPost[];
}

const ArticlesList: FC<Props> = ({ articles }): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1122px] gap-10 lg:gap-[120px]">
      <div className="flex flex-col gap-9 lg:gap-[66px]">
        {articles.map((item, index) => (
          <ArticleListItem key={index} article={item} />
        ))}
      </div>
      <TagsList />
    </div>
  );
};

export default ArticlesList;
