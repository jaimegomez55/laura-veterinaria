import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CalculatorPage from "../pages/calculator/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculadora",
    element: <CalculatorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
