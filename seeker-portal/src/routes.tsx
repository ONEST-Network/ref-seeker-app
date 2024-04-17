import Home from "./components/Home";
import About from "./components/About";

export const pageRoutes = {
  HOME: "/",
  ABOUT: "/about"
};

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: React.FC<{}>;
}

export const routes: Route[] = [
  {
    key: "home-route",
    title: "HomePage",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "about-route",
    title: "About",
    path: "/About",
    enabled: true,
    component: About,
  }
];