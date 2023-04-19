import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import MapSharpIcon from '@mui/icons-material/MapSharp';


export const SidebarData = [
  {
    title:"Dashboard",
    icon: <GridViewIcon/>,
    link:"/dashboard",
  },
  {
    title:"Buses",
    icon: <DirectionsBusIcon/>,
    link:"/buses",
  },
  {
    title:"Drivers",
    icon: <PersonOutlineIcon/>,
    link:"/drivers",
  },
   {
    title:"Schedule",
    icon: <CalendarMonthSharpIcon/>,
    link:"/schedule",
  },
  {
    title:"Live Map",
    icon: <MapSharpIcon/>,
    link:"/livemap",
  },
  

];


const cardData = [
  { id: 1, icon:<DirectionsBusIcon/>, value:'5',title: 'Buses'  },
  { id: 2, icon:<PersonOutlineIcon/>,value:'8', title: 'Drivers' },
  { id: 3, icon:<CalendarMonthSharpIcon/>, value:'3', title: 'Schedule' },
];

export default cardData;

