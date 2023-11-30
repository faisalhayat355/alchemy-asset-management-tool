"use client"
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IAssets } from '../models/assets.model';
const localizer = momentLocalizer(moment);

type AssetsProps = {
  users: Array<IAssets>;
};

const AssetCalendarView = ({users}:AssetsProps) => {
    const [events, setEvents] = useState([]);
    const calendarAsset = users?.map((users) => {
      return {
        title: users.name,
        start: new Date(users.name),
        end: new Date(users.updatedAt),
      }
    });
    useEffect(() => {
      setEvents(calendarAsset);
    }, []);
  return (
    <>
     <Grid container  mt={-2} sx={{background:'white',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',width:'96.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid pt={1} container height={"77vh"}>
          <Grid item xs={12}>
            <Calendar events={events} startAccessor="start"
              endAccessor="end" defaultDate={moment().toDate()} localizer={localizer} />
          </Grid>
        </Grid>
     </Grid>     
   </>
  )
}

export default AssetCalendarView
