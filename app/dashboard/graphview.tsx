// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Element", "Density", { role: "style" }],
//   ["Copper", 8.94, "#b87333"], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
// ];

// export function DashboardGraphView() {
//   return (
//     <Chart chartType="ColumnChart" width="100%" height="363px" data={data} />
//   );
// }


import Grid from "@mui/material/Grid";
import PieChart from "react-pie-graph-chart";
import IDashboardComponentProps from "./dashboard.props";

interface GraphComponentProps extends IDashboardComponentProps {}
const DashboardGraphView = ({ items }: GraphComponentProps) => {

  const example = [
    {
      type: "Assign Asset",
      value: items?.filter(item=>item.status==="Assign").length,
      color: "#1F7DA9",
    },
    {
      type: "Active Stock",
      value: items?.filter(item=>item.status==="UnAssign").length,
      color: "#a21caf",
    },
    {
      type: "UnderMaintainance Asset",
      value: items?.filter(item=>item.status==="UnderMaintainance")?.length,
      color: "#facc15",
    },
    {
      type: "Scrap Asset",
      value: items?.filter(item=>item.status==="Scrap").length,
      color: "#84cc16",
    }
  ];

  return (
    <Grid container style={{paddingRight:'1rem'}}>
      <Grid item xs={12} >
      <PieChart data={example} />
      </Grid>
    </Grid>
  );
};

export default DashboardGraphView;



// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Element", "Total Asset", { role: "style" }],
//   ["Total Asset", 8, "color: red"],
//   ["Asset Assigned", 3, "gold"],
//   ["Active Stock", 3, "green"],
//   ["Under Maintainance", 1, "blue"],
//   ["Scrapped", 1, "#b87333"],
// ];
// const DashboardGraphView = () => {

//   return (
//     <div>
//        <Chart chartType="ColumnChart" width="100%" height="363px" data={data} />
//     </div>
//   )
// }

// export default DashboardGraphView
