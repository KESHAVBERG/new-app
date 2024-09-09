import React from 'react';
import { Box, Typography, Card, CardMedia, Container } from '@mui/material';
import { useLocation } from 'react-router-dom'
const ReadMore = () => {
    const location = useLocation();
    const { title, content, image } = location.state;

    return (
        <Container sx={{ mt: 4, mb: 4, height:"100%" }}>
             <Card sx={{ maxWidth: '100%', mb: 4 }}>
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt={title}
            sx={{
                width: '100%',
                height: 'auto', 
                objectFit: 'cover',
                maxHeight: 400, 
              }}          />
        </Card>
            <Box sx={{ maxWidth: '800px', width: '100%', height:"100%" }}>
          <Typography variant="h3" component="div" gutterBottom sx={{fontSize:{sm:"30px", xs:"30px"}}}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {content}
          </Typography>
        </Box>
        </Container>)
}

export default ReadMore
