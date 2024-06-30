import { FC } from "react";
import { Logo } from "../../assets/svg";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

interface Props {}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tags", href: "/tags" },
  { name: "About", href: "/about" },
];

const Header: FC<Props> = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="flex w-full h-[57px] items-center justify-center">
      <div className="flex flex-1 gap-[31px]">
        {/*Logo*/}
        <Logo className="w-[178px] h-[57px]" />
        {/*Nav links*/}
        <ul className="flex gap-[31px] items-center justify-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`text-primary font-libre ${
                location.pathname === item.href ? "font-bold" : "font-normal"
              }`}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/*Search - Login - Profile*/}
      <div className="flex gap-[21px] items-center justify-center">
        <FiSearch size={20} className="font-bold" />
        <button className="border-2 border-secondary w-[135px] h-[46px] rounded-[10px]">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
