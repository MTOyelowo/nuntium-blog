import { RouterProvider } from "react-router-dom";
import router from "./app/routes";

function App() {
  return (
    <div className=" mt-4 lg:mt-[31px]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
