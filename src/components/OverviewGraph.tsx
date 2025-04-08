import { Dropdown, Option } from "@fluentui/react-components";
import { addOptions, availableMetrics, timePeriods } from "../constants";
import { ChevronDownRegular } from "@fluentui/react-icons";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import {
  DataPoint,
  MetricStats,
  MetricType,
  TimePeriods,
  TimeRangeType,
} from "../interfaces";
import { Tooltip } from "recharts";

interface IOverviewGraphProps {
  metricType: MetricType;
  setMetricType: React.Dispatch<React.SetStateAction<MetricType>>;
  timeRange: keyof TimePeriods;
  setTimeRange: React.Dispatch<React.SetStateAction<keyof TimePeriods>>;
  metricStats: MetricStats;
  displayData: DataPoint[];
}

const OverviewGraph = ({
  metricType,
  setMetricType,
  timeRange,
  setTimeRange,
  metricStats,
  displayData,
}: IOverviewGraphProps) => {
  return (
    <div className="w-2/3 pr-4">
      <div className="border border-eerieBlack rounded-lg p-4">
        <div className="flex items-center mb-4 gap-2">
          {/* Metric Type Dropdown */}
          <div className="relative">
            <Dropdown
              className="border border-eerieBlack rounded-full px-4 py-2 text-base min-w-[160px] flex items-center"
              value={metricType}
              onOptionSelect={(_, data) => {
                setMetricType(data.optionValue as MetricType);
              }}
              placeholder="Select metric"
              expandIcon={<ChevronDownRegular />}
              style={{
                border: "1px solid #27272a",
                borderRadius: "9999px",
                padding: "8px 16px",
                fontSize: "1rem",
                minWidth: "160px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {availableMetrics.map((option) => (
                <Option
                  key={option}
                  value={option}
                  style={{
                    backgroundColor: "black",
                    padding: "12px 16px",
                    fontSize: "1rem",
                  }}
                >
                  {option}
                </Option>
              ))}
            </Dropdown>
          </div>

          {/* Time Range Dropdown */}
          <div className="relative">
            <Dropdown
              className="border border-eerieBlack rounded-full px-4 py-2 text-base min-w-[160px] flex items-center"
              value={timeRange}
              onOptionSelect={(_, data) => {
                setTimeRange(data.optionValue as TimeRangeType);
              }}
              placeholder="Select time range"
              expandIcon={<ChevronDownRegular />}
              style={{
                border: "1px solid #27272a",
                borderRadius: "9999px",
                padding: "8px 16px",
                fontSize: "1rem",
                minWidth: "160px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {(Object.keys(timePeriods) as TimeRangeType[]).map((option) => (
                <Option
                  key={option}
                  value={option}
                  style={{
                    backgroundColor: "black",
                    padding: "12px 16px",
                    fontSize: "1rem",
                  }}
                >
                  {option}
                </Option>
              ))}
            </Dropdown>
          </div>

          {/* Add Dropdown */}
          <div className="relative">
            <Dropdown
              placeholder="+ Add"
              expandIcon={<ChevronDownRegular />}
              style={{
                border: "1px solid #27272a",
                borderRadius: "9999px",
                padding: "8px 16px",
                fontSize: "1rem",
                minWidth: "160px",
                display: "flex",
                alignItems: "center",
              }}
              selectedOptions={[]}
            >
              {addOptions.map((option) => (
                <Option
                  key={option}
                  value={option}
                  style={{
                    backgroundColor: "black",
                    padding: "12px 16px",
                    fontSize: "1rem",
                  }}
                >
                  {option}
                </Option>
              ))}
            </Dropdown>
          </div>
        </div>

        {/* Metric Info */}
        <div className="mb-2">
          <div className="text-4xl font-bold">{metricStats.total}</div>
          <div className="text-green-500 text-sm">
            {metricStats.percentage} ({metricStats.growth})
          </div>
        </div>

        {/* Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={displayData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", border: "none" }}
                labelStyle={{ color: "#fff" }}
                formatter={(value: number) => [`${value}`, metricType]}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewGraph;
