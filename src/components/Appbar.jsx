import React from 'react'
import { AppBar, Box, Typography,  Select, MenuItem, FormControl} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const droupdownsx = {
  fontSize: '14px',     
  padding: '0',         
  height: '24px',       
  width:"60px",
  color: 'black',      
  minWidth: 50,         
  '& .MuiSelect-select': {
    height: '24px',       
    display: 'flex',
    alignItems: 'center',
  }
}

const titleSx = {
  mx: 2,
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.2rem',
  color: 'rgb(185, 157, 246)',
  textDecoration: 'none',
}

const Appbar = ({ selectedLanguage, setSelectedLanguage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  function handleSearch(){
    navigate('/search')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='appbar' position='fixed' sx={{ bgcolor: "white", zIndex: 0, pt: 2, px: { lg: 7, md: 7, sm: 2, sx: 2 }, display: "flex", flexDirection: "row" }}
        elevation={0}>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={titleSx}>
          ACONEWS
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

  { isHome && <FormControl sx={{ minWidth: 10 }}>
          <Select
            labelId="language-label"
            id="language-select"
            variant="standard" 
            value={selectedLanguage}
            onChange={handleLanguageChange}
            label="Language"
            disableUnderline
            sx={droupdownsx}       >
            <MenuItem value="en">en</MenuItem>
            <MenuItem value="es">es</MenuItem>
            <MenuItem value="fr">fr</MenuItem>
            <MenuItem value="de">de</MenuItem>
          </Select>
        </FormControl>}

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <SearchIcon onClick={handleSearch} sx={{ mx: 2, color: "black", }} />
        </motion.div>
      </AppBar>
    </Box>
  )
}

export default Appbar