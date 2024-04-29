import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export const pageRoutes = {
  HOME: "/",
  LOGIN: "/login",
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
    key: "login-route",
    title: "Login",
    path: "/login",
    enabled: true,
    component: Login,
  }
];