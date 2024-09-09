import {Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import {React} from 'react'
import { useNavigate } from 'react-router-dom';


const Newscard = ({ title, description, image, content }) => {
    const navigate = useNavigate();
    function handleReadMore(){
        console.log(description)
        console.log("navigation happening", `/readmore/${encodeURIComponent(title)}`)
        navigate(`/readmore/${encodeURIComponent(title)}`,{
            state:{title, content, image},
        });
    }
    const cardSx = {
        maxWidth: 345,
        height: 350, 
    };
    const buttonsx = {
        borderRadius: '30px', 
        bgcolor: 'white', 
        color:"rgb(185, 157, 246)",
        mx: 1,
        border: '1px solid grey',
        '&:hover': {
          bgcolor: 'rgb(185, 157, 246)', 
          color:'white'
        },
      }
      
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
    const cardActionsSx = {
        justifyContent: 'flex-start', 
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
                <CardActions sx={cardActionsSx}>
                    <Button sx={buttonsx} onClick={handleReadMore}>Read More</Button>
                </CardActions>
            </Card>
    )
}

export default Newscard