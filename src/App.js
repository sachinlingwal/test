import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Product />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
