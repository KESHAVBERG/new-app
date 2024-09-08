import React from 'react'
import { AppBar, Box } from '@mui/material'
import './style.css'


// https://arshadalisoomro.hashnode.dev/creating-a-navigation-bar-with-mui-appbar-component-in-nextjs
const Appbar = () => {
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar className='appbar' position='fixed'  sx={{ bgcolor: "white", zIndex: 0 }}
        elevation={0}>
            <p>Hello</p>
        </AppBar>
    </Box>
  )
}

export default Appbar