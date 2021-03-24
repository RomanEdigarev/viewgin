import React, { FC } from "react";
import Chart from "react-apexcharts";
import { LineChartData, PropsForChartComponent } from "../../../features/types";

const LineChart: FC<{ data: LineChartData[] }> = ({ data }) => {
  const categories = data[0].data.map((item) => item[0]);
  const series = data.map((item) => {
    return {
      name: item.title,
      data: item.data.map((data) => data[1]),
    };
  });

  const state: PropsForChartComponent = {
    options: {
      title: {
        text: "LineChart",
        align: "center",
      },
      xaxis: {
        type: "datetime",
        categories: [...categories],
      },
    },
    series: [...series],
  };

  return (
    <div className={"d-flex justify-content-center"} style={{ height: "60%" }}>
      <div style={{ width: "100%" }}>
        <Chart
          options={state.options}
          series={state.series}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default LineChart;
