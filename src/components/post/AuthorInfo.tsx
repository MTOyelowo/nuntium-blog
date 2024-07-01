import { FC } from "react";
import { useUser } from "../../app/hooks/useUser";
import UserSkeleton from "../skeletons/UserSkeleton";

interface Props {
  authorId: number;
}

const AuthorInfo: FC<Props> = ({ authorId }): JSX.Element => {
  const { data: user, isLoading, error } = useUser(authorId);

  return (
    <>
      {isLoading ? <UserSkeleton /> : null}
      {error ? (
        <div className="flex flex-col gap-[15px] items-center justify-center">
          <h1 className="text-lg text-secondary font-libre opacity-60">
            {error.message}
          </h1>
        </div>
      ) : null}
      {!isLoading && !error && user ? (
        <div className="flex flex-col gap-[4px] lg:gap-[15px] ">
          <h3 className="text-base lg:text-xl text-secondary opacity-50 uppercase">
            About the Author
          </h3>
          <div className="w-full mx-auto flex flex-col lg:flex-row items-center p-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 lg:w-40 aspect-square rounded-full object-cover mb-[17px] lg:mb-0 lg:mr-[37px]"
            />
            <div>
              <h2 className="font-libre text-lg lg:text-[33px] lg:leading-[40px] font-bold">
                {user.name}
              </h2>
              <p className="text-sm lg:text-base text-secondary opacity-50">
                @{user.link}
              </p>
              <p className="text-secondary mt-[13px]">{user.about}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AuthorInfo;
