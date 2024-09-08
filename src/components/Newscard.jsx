import { color } from 'framer-motion'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Newscard = ({ title, description, image }) => {
    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Newscard