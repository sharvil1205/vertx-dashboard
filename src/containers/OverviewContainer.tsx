import { useState, useEffect } from "react";

import {
  MetricType,
  TimeRangeType,
  DataPoint,
  MetricStats,
} from "../interfaces";
import { fullMonthData } from "../constants";
import { OverviewLayout } from "../components";

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
    <OverviewLayout
      metricStats={metricStats}
      metricType={metricType}
      setMetricType={setMetricType}
      timeRange={timeRange}
      setTimeRange={setTimeRange}
      displayData={displayData}
    />
  );
};

export default OverviewContainer;
