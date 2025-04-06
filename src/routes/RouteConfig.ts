import { AnalyticsContainer } from "../containers";
import { routeNames } from "./RouteNames";

export interface IRouteConfig {
  path: string;
  component: () => JSX.Element;
  children?: IRouteConfig[];
}

const routes: IRouteConfig[] = [
  {
    path: routeNames.analytics,
    component: AnalyticsContainer,
  },
];

export { routes };
