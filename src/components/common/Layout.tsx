import { Outlet } from "react-router-dom";
import Header from "./Header";

const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default HeaderLayout;
