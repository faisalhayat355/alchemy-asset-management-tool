import { Grid, Paper } from "@mui/material";
import { Case, Default, Switch } from "react-if";
import { IAssets } from "../assets/listofassets/models/assets.model";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


const DashboardGraphView = ({ newAsset }: any) => {

  const countryData = [
    {type: "Banglore",value: newAsset?.filter((item:IAssets) => item.location == "Banglore")?.length,color: "blue",},
    {type: "Noida",value: newAsset.filter((item:IAssets) => item.location == "Noida").length,color: "red",}
  ]
  return (
    <Paper elevation={3}>
      <Grid container mt={2} p={2}>
        <Grid item xs={1}></Grid>
         {/* <PieChart data={countryData} width="100%"height="400px" /> */}


         <PieChart width={500} height={250}>
         <Pie
            data={countryData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={countryData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>


        {/* <Grid item xs={12}>
          <Switch>
            <Case condition={graphView === "country"}>
              <PieChart data={countryData} />
            </Case>
            <Case condition={graphView === "state"}>State</Case>
            <Case condition={graphView === "city"}>City</Case>
            <Default>
              <PieChart data={countryData} />
            </Default>
          </Switch>
        </Grid> */}
      </Grid>
    </Paper>
  );
};

export default DashboardGraphView;
