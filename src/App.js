import "./App.css";
import { Box } from "@mui/material";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Newcontent from "./components/Newcontent";
import Appbar from "./components/Appbar";

const tabstyle = {
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
}

function App() {
  const [value, setValue] = useState("general");
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTabIndex(newValue);
    switch (newValue) {
      case 0:
        setValue("general");
        break;
      case 1:
        setValue("sports");
        break;
      case 2:
        setValue("tech");
        break;
      case 3:
        setValue("food");
        break;
      default:
        setValue("general");
    }
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
          className="tabs-ele" sx={tabstyle} />
          <Tab label="Sports" className="tabs-ele" sx={tabstyle}  />
          <Tab label="Tech" className="tabs-ele"  sx={tabstyle}  />
          <Tab label="Food" className="tabs-ele" sx={tabstyle}  />
        </Tabs>
      </Box>
      <Newcontent topic={value} />
    </>
  );
}

export default App;
