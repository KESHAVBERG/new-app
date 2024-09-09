import {Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Newscard = ({ title, description, image }) => {
    const cardSx = {
        maxWidth: 345,
        height: 300, 
    };

    const cardContentSx = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden', 
    };

    const titleSx = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    };

    const descriptionSx = {
        color: 'text.secondary',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
    };
   
    return (
            <Card sx={cardSx}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent sx={cardContentSx}>
                    <Typography sx={titleSx} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={descriptionSx} variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Newscard