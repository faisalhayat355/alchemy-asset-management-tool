import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from "@mui/material";

const localizer = momentLocalizer(moment);

const DashboardCalender = ({data}:any) => {
  const [events, setEvents] = useState([]);
  const calendarCompanies = data.map((items:any) => {
    return {
      title: items.assettagid,
      start: new Date(items.createdAt),
      end: new Date(items.updatedAt),
    }
  });
  useEffect(() => {
    setEvents(calendarCompanies);
  }, []);

  return (
    <Box>
      <Grid style={{width:'96.5%',padding:'1rem',marginLeft:'1rem',marginTop:'-0.7rem'}} >
      <div style={{height:"52.5vh"}}>
        <Calendar events={events} startAccessor="start" endAccessor="end" defaultDate={moment().toDate()} localizer={localizer}/>
      </div>
      </Grid>
   </Box>
  )
}

export default DashboardCalender