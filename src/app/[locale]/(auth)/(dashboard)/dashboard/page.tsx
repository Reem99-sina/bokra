"use client";
// import Areachart from "@/components/shared/charts/AreaChart";
// import BarChart from "@/components/shared/charts/BarChart";

// import DoughnutChart from "@/components/shared/charts/DoughnutChart";
import * as React from "react";

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  const labels = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"];
  const dataValues = [500, 700, 400, 800, 600, 900, 1200];
  return (
    <div className="container ">
      {/* <Areachart labels={labels} dataValues={dataValues} />{" "}
      <div className="grid grid-cols-2 gap-6 p-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <DoughnutChart labels={labels} dataValues={dataValues} />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <BarChart labels={labels} dataValues={dataValues} />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
