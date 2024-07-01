import { FC, useEffect, useRef, useState } from "react";
import { Logo } from "../../assets/svg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface Props {}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tags", href: "/tags" },
  { name: "About", href: "/about" },
];

const Header: FC<Props> = (): JSX.Element => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (isMobileSearchOpen) setIsMobileSearchOpen(false);
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const toggleSearch = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileSearch = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const handleSearch = () => {};

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex w-full h-[57px] items-center justify-center px-[25px]">
      <div className="flex flex-1 gap-[31px]">
        {/*Logo*/}
        <Logo className="w-[178px] h-[57px]" />
        {/* Nav links for larger screens */}
        <ul className="hidden lg:flex gap-[31px] items-center justify-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`text-primary font-libre ${
                location.pathname === item.href ? "font-bold" : "font-normal"
              }`}
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Search - Login - Profile for larger screens */}
      <div className="hidden lg:flex gap-[21px] items-center justify-center">
        <div className="relative" ref={searchRef}>
          <input
            type="text"
            className={`w-[363px] bg-white border-2 border-primary transition h-[46px] px-6 rounded-[10px] left-0 top-[31px] ${
              isSearchOpen ? "block" : "hidden"
            } `}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button onClick={isSearchOpen ? handleSearch : toggleSearch}>
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        <button className="border-2 border-secondary w-[135px] h-[46px] rounded-[10px]">
          Login
        </button>
      </div>
      {/* Hamburger menu and search for smaller screens */}
      <div className="flex lg:hidden gap-[21px] items-center justify-center">
        <button onClick={toggleMobileSearch}>
          <FiSearch size={20} className="font-bold" />
        </button>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX size={20} className="transition ease-in-out" />
          ) : (
            <FiMenu size={20} className="transition ease-in-out" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white z-50 transition ease-in-out">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`text-primary font-libre ${
                  location.pathname === item.href ? "font-bold" : "font-normal"
                }`}
              >
                <Link to={item.href} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
            <button
              className="border-2 border-secondary w-[135px] h-[46px] rounded-[10px] mt-4"
              onClick={toggleMenu}
            >
              Login
            </button>
          </ul>
        </div>
      )}
      {/* Mobile search overlay */}
      {isMobileSearchOpen && (
        <div className="absolute lg:hidden left-0 w-full h-60 pt-10 bg-white z-50 flex items-center justify-center">
          <div className="block relative p-5 w-full">
            <div className="flex justify-end mb-10">
              <button onClick={toggleMobileSearch}>
                <FiX size={20} className="" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white outline-none border  transition h-10 lg:h-11 px-6 rounded-[5px] left-0 top-[31px] mt-[6px] hover:ring-1 ring-primary focus:ring-1 focus:ring-primary block"
              />

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiSearch size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
