import Home from "../Components/Home/Home";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
];
