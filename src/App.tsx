import { SidebarContainer } from "./containers";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes/RouteConfig";

const App = () => {
  return (
    <div className="flex flex-row m-5 gap-8 justify-start">
      <SidebarContainer />
      <div className="flex-grow">
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Default route redirect */}
          <Route path="/" element={<Navigate to="/analytics" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
