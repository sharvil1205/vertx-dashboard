import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  MetricType,
  TimeRangeType,
  DataPoint,
  MetricStats,
} from "../interfaces";
import {
  timePeriods,
  fullMonthData,
  addOptions,
  availableMetrics,
  insightData,
  countryStats,
} from "../constants";
import {
  Dropdown,
  Option,
  Link,
  Card,
  CardFooter,
  CardHeader,
  ProgressBar,
  Button,
} from "@fluentui/react-components";
import {
  ArrowRight24Regular,
  ArrowRightRegular,
  ChevronDownRegular,
} from "@fluentui/react-icons";
import { DemographicsLayout } from "../components";

const OverviewContainer = () => {
  const [metricType, setMetricType] = useState<MetricType>("Visitors");
  const [timeRange, setTimeRange] = useState<TimeRangeType>("Last 30 days");
  const [displayData, setDisplayData] = useState<DataPoint[]>([]);

  // Format number with K suffix
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    }
    return num.toString();
  };

  // Calculate values based on current selections
  const calculateTotalAndGrowth = (data: DataPoint[]): MetricStats => {
    if (!data || data.length === 0)
      return { total: "0", growth: 0, percentage: "0%" };

    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    const growthPercent = ((lastValue - firstValue) / firstValue) * 100;
    const growthValue = Math.abs(lastValue - firstValue);

    // Sum of all values for the total
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const formattedTotal = formatNumber(total);

    return {
      total: formattedTotal,
      growth: growthValue,
      percentage: `${growthPercent > 0 ? "+" : ""}${growthPercent.toFixed(2)}%`,
    };
  };

  // Function to filter data based on time range
  const filterDataByTimeRange = (
    allData: DataPoint[],
    range: TimeRangeType
  ): DataPoint[] => {
    switch (range) {
      case "Today":
        return allData.filter((item) => item.date === "Mar 30");

      case "Yesterday":
        return allData.filter((item) => item.date === "Mar 29");

      case "This week":
        return allData.slice(-7);

      case "Last week":
        return allData.slice(-14, -7);

      case "Last 7 days":
        return allData.slice(-7);

      case "Last 30 days":
        return allData.filter((item) => {
          const day = parseInt(item.date.split(" ")[1]);
          return day % 5 === 0 || day === 1;
        });

      default:
        return allData;
    }
  };

  // Update display data when selections change
  useEffect(() => {
    const allData = fullMonthData[metricType];
    const filteredData = filterDataByTimeRange(allData, timeRange);
    setDisplayData(filteredData);
  }, [metricType, timeRange]);

  const metricStats = calculateTotalAndGrowth(displayData);

  return (
    <div className="bg-black text-white p-6 rounded-lg gap-6">
      <h2 className="text-2xl mb-4">Overview</h2>

      <div className="flex items-center mb-4 gap-4">
        {/* Metric Type Dropdown */}
        <div className="relative">
          <Dropdown
            className="w-48"
            value={metricType}
            onOptionSelect={(_, data) => {
              setMetricType(data.optionValue as MetricType);
            }}
            placeholder="Select metric"
            expandIcon={<ChevronDownRegular />}
          >
            {availableMetrics.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Dropdown>
        </div>

        {/* Time Range Dropdown */}
        <div className="relative">
          <Dropdown
            className="w-48"
            value={timeRange}
            onOptionSelect={(_, data) => {
              setTimeRange(data.optionValue as TimeRangeType);
            }}
            placeholder="Select time range"
            expandIcon={<ChevronDownRegular />}
          >
            {(Object.keys(timePeriods) as TimeRangeType[]).map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Dropdown>
        </div>

        {/* Add Dropdown - Dummy */}
        <div className="relative">
          <Dropdown
            placeholder="Add"
            expandIcon={<ChevronDownRegular />}
            className="w-full"
            selectedOptions={[]} // Keeps dropdown unselected always
          >
            {addOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Dropdown>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/3 pr-4">
          <div className="mb-2">
            <div className="text-4xl font-bold">{metricStats.total}</div>
            <div className="text-green-500 text-sm">
              {metricStats.percentage} ({metricStats.growth})
            </div>
          </div>

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

        <div className="w-1/3 pl-4 border-l border-gray-700">
          <h3 className="text-xl mb-4">Insights</h3>

          <div className="mb-6">
            <div className="text-gray-400">Founders</div>
            <div className="text-3xl font-bold">
              {insightData.founders.value}
            </div>
            <div className="text-green-500 text-sm">
              {insightData.founders.growth} {insightData.founders.growthValue}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-400">Investors</div>
            <div className="text-3xl font-bold">
              {insightData.investors.value}
            </div>
            <div className="text-green-500 text-sm">
              {insightData.investors.growth} {insightData.investors.growthValue}
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="flex items-center justify-end text-sm">
              View detailed insights
              <ArrowRightRegular className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <DemographicsLayout />
    </div>
  );
};

export default OverviewContainer;
