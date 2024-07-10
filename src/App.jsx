import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import NotFound from "./components/Layouts/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckOut /> },
  { path: "*", element: <NotFound /> },
]);
const App = () => {
  return (
    <>
      <div className="font-inter">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
