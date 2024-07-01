import { FC } from "react";
import { usePost } from "../../hooks/usePost";
import { usePosts } from "../../hooks/usePosts";
import { useParams } from "react-router-dom";
import PostContent from "../../../components/post/PostContent";
import AuthorInfo from "../../../components/post/AuthorInfo";
import PostFooter from "../../../components/post/PostFooter";
import PostContentSkeleton from "../../../components/skeletons/PostContentSkeleton";

interface Props {}

const Post: FC<Props> = (): JSX.Element => {
  const page = 1;
  const limit = 100;

  const { id } = useParams<{ id: string }>();
  const { data: posts } = usePosts(page, limit);
  const {
    data: currentPost,
    error: postError,
    isLoading: postLoading,
  } = usePost(id!);

  if (postLoading) {
    return (
      <div className="px-[25px] mt-20">
        <PostContentSkeleton />
      </div>
    );
  }

  if (!postLoading && postError) {
    return (
      <div className="w-full">
        <h1 className="font-libre text-xl font-semibold">
          {postError.message}
        </h1>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="w-full items-center justify-center">
        <h1 className="font-libre text-2xl font-semibold text-center opacity-50">
          Post not found
        </h1>
      </div>
    );
  }

  const currentIndex =
    posts?.findIndex((post) => post.id === currentPost.id) || 0;
  const prevPost = currentIndex > 0 ? posts![currentIndex - 1] : null;
  const nextPost =
    currentIndex < (posts?.length || 0) - 1 ? posts![currentIndex + 1] : null;

  return (
    <>
      {!postLoading && postError ? (
        <div>
          <h1>{postError}</h1>
        </div>
      ) : null}
      {!postLoading && !postError && currentPost ? (
        <>
          <section className="px-[25px]">
            <PostContent article={currentPost} />
          </section>
          <section className="mx-auto mt-[72px] w-full lg:max-w-[655px] px-[25px] lg:px-0">
            <AuthorInfo authorId={currentPost.userId} />
          </section>
        </>
      ) : null}
      <footer className="mt-20 lg:mt-[163px]">
        <PostFooter prevPost={prevPost} nextPost={nextPost} />
      </footer>
    </>
  );
};

export default Post;
