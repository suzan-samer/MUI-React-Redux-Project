
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root.jsx";
import NotFound from "pages/NotFound";

import Home from "pages/Home.jsx";
import ProductCart from "pages/ProductCart";
import ProductDetails from "pages/ProductDetails";
import FavoritePage from "pages/FavoritePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/cart" element={<ProductCart />}/>
      <Route path="product/:id" element={<ProductDetails />} />
      <Route index element={<Home/>} />
      <Route path="/Favorite" element={<FavoritePage/>} />
      <Route path="/Favorite/product/:id" element={<ProductDetails/>} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
