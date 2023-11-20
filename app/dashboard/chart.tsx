import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { IAssets } from '../assets/listofassets/models/assets.model';



const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  
const DashboardChart = ({newAsset}:any) => {
    const countryData = [
        {type: "Banglore",value: newAsset?.filter((item:IAssets) => item.location == "Banglore")?.length,color: "blue",},
        {type: "Noida",value: newAsset.filter((item:IAssets) => item.location == "Noida").length,color: "red",}
      ]
    
  return (
    <div>
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </div>
  )
}

export default DashboardChart
