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
    path: '/',
    exact: true,
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];
