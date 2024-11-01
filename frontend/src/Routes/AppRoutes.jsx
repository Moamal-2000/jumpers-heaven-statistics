import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import RoutesLayout from "./RoutesLayout";

const AppRoutes = () => {
  const appRoutes = createRoutesFromElements(
    <Route path="/" element={<RoutesLayout />}>
      {routes.map(({ path, element }, index) => (
        <Route path={path} element={element} key={index} />
      ))}
    </Route>
  );

  const router = createBrowserRouter(appRoutes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
