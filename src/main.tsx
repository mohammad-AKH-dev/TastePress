import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <div className="content">
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </div>
);
