import { FC } from "react";

interface Props {}

const tags = [
  { name: "Technology", href: "/technology" },
  { name: "Open", href: "/open" },
  { name: "Source", href: "/source" },
  { name: "JavaScript", href: "/javascript" },
  { name: "Minimalism", href: "/minimalism" },
  { name: "Self-help", href: "/self-help" },
  { name: "Animals", href: "/animals" },
  { name: "Herbivores", href: "/herbivores" },
  { name: "HTML", href: "/html" },
  { name: "CSS", href: "/css" },
  { name: "PHP", href: "/php" },
  { name: "Web", href: "/web" },
  { name: "Technologies", href: "/technologies" },
  { name: "Career", href: "/career" },
  { name: "Life", href: "/life" },
  { name: "Spirituality", href: "/spirituality" },
  { name: "Food", href: "/food" },
  { name: "Cooking", href: "/cooking" },
  { name: "Sports", href: "/sports" },
  { name: "Racing", href: "/racing" },
  { name: "Mountain", href: "/mountain" },
  { name: "Hiking", href: "/hiking" },
  { name: "Cruising", href: "/cruising" },
];

const TagsList: FC<Props> = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-[3px]">
      <h1 className="font-bold text-xl">tags</h1>
      <ul className="flex flex-row flex-wrap lg:flex-col gap-4 text-base text-primary">
        {tags.map((item, index) => (
          <li key={index} className="">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsList;
