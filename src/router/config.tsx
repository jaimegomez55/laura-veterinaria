import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CalculatorPage from "../pages/calculator/page";
import ReferralPage from "../pages/referral/page";
import PoliticaPrivacidad from "../pages/PoliticaPrivacidad";
import PoliticaCookies from "../pages/PoliticaCookies";
import AvisoLegal from "../pages/AvisoLegal";
import TerminosCondiciones from "../pages/TerminosCondiciones";

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
    path: "/politica-de-privacidad",
    element: <PoliticaPrivacidad />,
  },
  {
    path: "/politica-de-cookies",
    element: <PoliticaCookies />,
  },
  {
    path: "/aviso-legal",
    element: <AvisoLegal />,
  },
  {
    path: "/terminos-y-condiciones",
    element: <TerminosCondiciones />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
