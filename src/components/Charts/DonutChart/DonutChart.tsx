import React, { FC } from "react";
import Chart from "react-apexcharts";
import {
  DonutChartData,
  PropsForChartComponent,
} from "../../../features/types";

const DonutChart: FC<{ data: DonutChartData[] }> = ({ data }) => {
  const labels: string[] = [];
  const series: number[] = [];

  data.forEach((item) => {
    labels.push(item.title);
    series.push(item.views);
  });

  const state: PropsForChartComponent = {
    options: {
      chart: {
        id: "DonutChart",
      },
      labels: labels,
    },
    series: series,
  };
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        width={"500"}
        type={"donut"}
      />
    </div>
  );
};

export default DonutChart;
