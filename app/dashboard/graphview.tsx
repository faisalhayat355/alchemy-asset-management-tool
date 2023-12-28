import Grid from "@mui/material/Grid";
import PieChart from "react-pie-graph-chart";
import IDashboardComponentProps from "./dashboard.props";

interface GraphComponentProps extends IDashboardComponentProps {}
const DashboardGraphView = ({ items }: any) => {

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