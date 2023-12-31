import React,{useState,useEffect} from 'react'
import moment from "moment";
import { Box, Grid } from '@mui/material';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const CalenderViewComponent = ({users}:any) => {
const [events, setEvents] = useState([])
const AllData = users.map((item:any)=>{
    return {'title':item.name,'start': new Date(item.createdAt),'end': new Date(item.updatedAt)}
  })
  useEffect(()=>{
    setEvents(AllData)
  },[])
  return (
    <Box>
      <Grid style={{width:'96.5%',background:'white',padding:'1rem',marginLeft:'1rem',marginTop:'-0.7rem'}} >
      <div style={{ height: "73vh" }}>
        <Calendar  events={events} startAccessor="start" endAccessor="end" defaultDate={moment().toDate()} localizer={localizer}/>
      </div>
      </Grid>
   </Box>
  )
}
export default CalenderViewComponent