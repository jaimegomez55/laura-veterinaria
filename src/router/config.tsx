import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CalculatorPage from "../pages/calculator/page";
import ReferralPage from "../pages/referral/page";

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
    path: "/deriva-un-caso",
    element: <ReferralPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
