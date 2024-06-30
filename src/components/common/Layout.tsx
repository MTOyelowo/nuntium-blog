import { Outlet } from "react-router-dom";
import Header from "./Header";

const HeaderLayout = () => (
  <div className="flex flex-col gap-[43px]">
    <Header />
    <Outlet />
  </div>
);

export default HeaderLayout;
