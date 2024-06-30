import { RouterProvider } from "react-router-dom";
import router from "./app/routes";

function App() {
  return (
    <div className="my-[31px] mx-[25px] gap-[43]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
