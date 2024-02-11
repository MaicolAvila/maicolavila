import Home from "@/app/page";

interface Route {
  name: string;
  path: string;
  exact?: boolean;
  routes?: Route[];
}

export const routesApp: Route[] = [
  {
    name: 'Home',
    path: '#home',
    exact: true,
  },
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Skills',
    path: '#skills',
  },
];
