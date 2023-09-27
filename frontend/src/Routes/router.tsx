import { RouteProps } from "Types";
import { ChevronLeft } from "@mui/icons-material";
import { Home } from "Pages/Home";

/**
 * Application main routes 'Dashboard, Customize'.
 */
export const mainRoutes: RouteProps[] = [
  {
    path: "/",
    name: "Flats",
    element: <Home />,
    icon: <ChevronLeft />,
  },
  {
    path: "/about",
    name: "About",
    element: <>A</>,
    icon: <ChevronLeft />,
  },
  {
    path: "/blog",
    name: "Blog",
    element: <>B</>,
    icon: <ChevronLeft />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <>C</>,
    icon: <ChevronLeft />,
  },
];

/**
 * Application support routes 'Help, Manual, About software, About nanosens, Contact'.
 */
export const supportRoutes: RouteProps[] = [];

/**
 * Application settings route 'Settings'.
 */
export const settingsRoutes: RouteProps[] = [];

/**
 * Fuction to generate all the necessarly routes.
 * @returns {RouteProps[]}
 */
export const createRoutes = () => {
  const routes = [];
  routes.push(...mainRoutes, ...supportRoutes, ...settingsRoutes);
  return routes;
};
