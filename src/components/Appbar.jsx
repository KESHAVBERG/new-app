import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
  const navigate = useNavigate();
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
          sx={{
            mx: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'rgb(185, 157, 246)',
            textDecoration: 'none',
          }}>
          ACONEWS
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
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