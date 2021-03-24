import React, { FC } from "react";
import LineChart from "./LineChart/LineChart";
import { Data } from "../../features/types";
import DonutChart from "./DonutChart/DonutChart";

const ChartsContainer: FC<Data> = ({
  dataForLineCharts,
  dataForDonutCharts,
}) => {
  return (
    <div style={{ height: "100%" }}>
      <LineChart data={dataForLineCharts} />
      <DonutChart data={dataForDonutCharts} />
    </div>
  );
};

export default ChartsContainer;
