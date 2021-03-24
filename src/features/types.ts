export type PropsForChartComponent = {
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "rangeBar"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "radar"
    | "polarArea";
  series?: Array<any>;
  width?: string | number;
  height?: string | number;
  options?: object;
};

export type DataForAuth = {
  login: string;
  password: string;
};

export type AuthData = {
  isAuth: boolean;
};

type Coordinates = [x: string, y: number];

export type LineChartData = {
  id: number;
  title: string;
  data: Coordinates[];
};

export type DonutChartData = {
  title: string;
  views: number;
};

export type Data = {
  dataForLineCharts: LineChartData[];
  dataForDonutCharts: DonutChartData[];
};

export type Fetch<T> = {
  statusFetching: "ok" | "loading" | "error";
  data: T;
};

export type State = {
  dataForCharts: Fetch<Data>;
  auth: Fetch<AuthData>;
  loading: boolean;
};
