import axios from "axios";
import {
  AuthData,
  Data,
  DataForAuth,
  DonutChartData,
  LineChartData,
} from "../features/types";

const instance = axios.create({
  baseURL: "http://ideadeploy.space/test/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: DataForAuth): Promise<AuthData> => {
  const response = await instance.post("login.json", {
    login: data.login,
    password: data.password,
  });
  if (response.status === 200) {
    return {
      isAuth: true,
    };
  } else {
    return {
      isAuth: false,
    };
  }
};

const getDataForLineChart = async (): Promise<LineChartData[]> => {
  const response = await instance.post<{ list: LineChartData[] }>("graph.json");
  return response.data.list;
};

const getDataForDonutChart = async (): Promise<DonutChartData[]> => {
  const response = await instance.get<{ list: DonutChartData[] }>("donut.json");
  return response.data.list.map(({ title, views }) => {
    return {
      title,
      views: +views,
    };
  });
};

export const getData = async (): Promise<Data> => {
  const dataForLineCharts = await getDataForLineChart();
  const dataForDonutCharts = await getDataForDonutChart();
  return {
    dataForLineCharts,
    dataForDonutCharts,
  };
};
