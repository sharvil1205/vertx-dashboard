export interface DataPoint {
  date: string;
  value: number;
}

export interface DataSets {
  Visitors: DataPoint[];
  Connections: DataPoint[];
  Interactions: DataPoint[];
  Impressions: DataPoint[];
}

export interface TimePeriod {
  days: number;
  offset?: number;
}

export interface TimePeriods {
  Today: TimePeriod;
  Yesterday: TimePeriod;
  "This week": TimePeriod;
  "Last week": TimePeriod;
  "Last 7 days": TimePeriod;
  "Last 30 days": TimePeriod;
}

export interface MetricStats {
  total: string;
  growth: number;
  percentage: string;
}

export interface InsightItem {
  value: string;
  growth: string;
  growthValue: string;
}

export interface InsightData {
  founders: InsightItem;
  investors: InsightItem;
}

export type MetricType =
  | "Visitors"
  | "Connections"
  | "Interactions"
  | "Impressions";
export type TimeRangeType = keyof TimePeriods;
