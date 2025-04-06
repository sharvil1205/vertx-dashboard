import { SidebarContainer } from "./containers";
import { Routes, Route, Navigate } from "react-router-dom";
import { IRouteConfig, routes } from "./routes/RouteConfig";

const renderRoutes = (routeArray: IRouteConfig[]) =>
  routeArray.map(({ path, component: Component, children }) => (
    <Route key={path} path={path} element={<Component />}>
      {children && renderRoutes(children)}
    </Route>
  ));

const App = () => {
  return (
    <div className="flex flex-row m-5 gap-8 justify-start">
      <SidebarContainer />
      <div className="flex-grow">
        <Routes>
          {renderRoutes(routes)}
          <Route path="/" element={<Navigate to="/analytics" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
