import { createBrowserRouter } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import HeaderLayout from "../../components/common/Layout";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);

export default router;
