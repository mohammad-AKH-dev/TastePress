import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Invoice from "./pages/Invoice";
import FoodDetailes from "./pages/FoodDetailes";
import TableReservation from "./pages/TableReservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/food-details/:id",
    element: <FoodDetailes />,
  },
  {
    path: "/table-reservation",
    element: <TableReservation />,
  },
]);

export default router