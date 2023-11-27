import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Tooltip } from "@mui/material";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import { ViewTypes } from "../utility/view.type";

const viewIconsSet = [
    {
      id: 1,
      view: ViewTypes.LIST,
      title: "List",
      icon: <Tooltip title="List" ><ListAltIcon fontSize="small" /></Tooltip>,
    },
    {
      id: 2,
      view: ViewTypes.GRID,
      title: "Grid",
      icon: <Tooltip title="Grid" ><GridViewIcon fontSize="small" /></Tooltip>,
    },
    {
      id: 4,
      view: ViewTypes.CALENDAR,
      title: "Calendar",
      icon: <Tooltip title="Calendar" ><CalendarMonthIcon fontSize="small" /></Tooltip>,
    },
    
  ];
  
const AssetViewComponent = ({onViewSelect}:any) => {
    const [alignment, setAlignment] = useState("left");

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null
    ) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
  return (
    <>
    <Stack direction="row">
      {viewIconsSet.map((item) => {
        return (
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment" key={item.id}>
            <ToggleButton value={item.id} aria-label="left aligned" key={item.id} onClick={() => onViewSelect(item.view)}
              style={{ border: "none",borderRadius: "50%",background: "transparent"}}>
              {item.icon}
            </ToggleButton>
          </ToggleButtonGroup>
        );
      })}
    </Stack>
  </>
  )
}

export default AssetViewComponent
