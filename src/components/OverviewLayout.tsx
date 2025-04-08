import { DataPoint, MetricStats, MetricType, TimePeriods } from "../interfaces";
import DemographicsLayout from "./DemographicsLayout";
import Insights from "./Insights";
import OverviewGraph from "./OverviewGraph";

interface IOverviewGraphProps {
  metricType: MetricType;
  setMetricType: React.Dispatch<React.SetStateAction<MetricType>>;
  timeRange: keyof TimePeriods;
  setTimeRange: React.Dispatch<React.SetStateAction<keyof TimePeriods>>;
  metricStats: MetricStats;
  displayData: DataPoint[];
}

const OverviewLayout = ({
  metricType,
  setMetricType,
  timeRange,
  setTimeRange,
  metricStats,
  displayData,
}: IOverviewGraphProps) => {
  return (
    <div className="p-6 rounded-lg gap-6 border border-eerieBlack">
      <h2 className="text-2xl mb-4">Overview</h2>

      <div className="flex">
        <OverviewGraph
          metricStats={metricStats}
          metricType={metricType}
          setMetricType={setMetricType}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          displayData={displayData}
        />

        <Insights />
      </div>

      <DemographicsLayout />
    </div>
  );
};

export default OverviewLayout;
