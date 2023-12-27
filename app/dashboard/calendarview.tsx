import React,{useState,useEffect} from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Grid } from '@mui/material';

const localizer = momentLocalizer(moment);

const DashboardCalender = ({data}:any) => {

  // const [events, setEvents] = useState([])

  // const AllData = data.map((item:any)=>{
  //   return {
  //     title:item.assettagid, 
  //     start: new Date(item.createdAt),
  //     end: new Date(item.updatedAt)}
  // })
  // useEffect(()=>{
  //   setEvents(AllData)
  // },[])
  const [events, setEvents] = useState([]);

  const calendarCompanies = data.map((items) => {
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
      <div style={{ height: "50vh" }}>
        <Calendar events={events} startAccessor="start" endAccessor="end" defaultDate={moment().toDate()} localizer={localizer}/>
      </div>
      </Grid>
   </Box>
  )
}

export default DashboardCalender