import {
  AnalyticsContainer,
  DemographicsContainer,
  OverviewContainer,
} from "../containers";
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
    children: [
      {
        path: routeNames.overview,
        component: OverviewContainer,
      },
      {
        path: routeNames.demographics,
        component: DemographicsContainer,
      },
    ],
  },
];

export { routes };
