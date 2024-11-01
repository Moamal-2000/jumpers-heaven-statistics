import { Outlet } from "react-router-dom";

const RoutesLayout = () => {
  return (
    <div className="App">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
export default RoutesLayout;
