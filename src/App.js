import "./App.css";
import Appbar from "./components/Appbar";
import { Box } from "@mui/material";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

function App() {
  const [value, setValue] = useState("");
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTabIndex(newValue)
    
    setValue(newValue);
  };

  return (
    <>
      <Appbar />
      <Box sx={{ width: "100%", mt:8,  display: 'flex', justifyContent: 'center' }}>
        <Tabs
        TabIndicatorProps={{ style: { display: "none" } }}
        value={currentTabIndex}
        onChange={handleChange}
         variant="scrollable" 
         scrollButtons="auto" 
         sx={{
           maxWidth: "100%",
           overflowX: 'auto', 
           display: 'flex',
           justifyContent: 'center',
         }}
        >
          <Tab label="General" 
          className="tabs-ele" sx={{
            borderRadius: '300px', 
            bgcolor: 'white', 
            mx: 1,
            border: '1px solid grey',
            "&.Mui-selected": {
              bgcolor: "rgb(185, 157, 246)", 
              color: "white",
            },
            '&:hover': {
              bgcolor: 'rgb(185, 157, 246)', 
              color:'white'
            },
          }} />
          <Tab label="Sports" className="tabs-ele" sx={{
            borderRadius: '300px', 
            bgcolor: 'white', 
            mx: 1,
            border: '1px solid grey',
            "&.Mui-selected": {
              bgcolor: "rgb(185, 157, 246)",
              color: "white",
            },
            '&:hover': {
              bgcolor: 'rgb(185, 157, 246)', 
              color:'white'
            },
          }}  />
          <Tab label="Tech" className="tabs-ele"  sx={{
            borderRadius: '300px', 
            bgcolor: 'white', 
            mx: 1,
            border: '1px solid grey',
            "&.Mui-selected": {
              bgcolor: "rgb(185, 157, 246)",
              color: "white",
            },
            '&:hover': {
              bgcolor: 'rgb(185, 157, 246)', 
              color:'white'
            },
          }}  />
          <Tab label="Food" className="tabs-ele" sx={{
            borderRadius: '300px', 
            bgcolor: 'white', 
            mx: 1,
            border: '1px solid grey',
            "&.Mui-selected": {
              bgcolor: "rgb(185, 157, 246)", 
              color: "white",
            },
            '&:hover': {
              bgcolor: 'rgb(185, 157, 246)', 
              color:'white'
            },
          }}  />
        </Tabs>
      </Box>
    </>
  );
}

export default App;
