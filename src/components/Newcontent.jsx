import { Box } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, Typography, Link, Grid } from '@mui/material';
import Newscard from './Newscard';
import { motion } from 'framer-motion';

const containerSx = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: 2,
    '@media (min-width:600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width:900px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (min-width:1200px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    }
};

const CACHE_EXPIRY_DAYS = 3;
const CACHE_EXPIRY_MS = CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

const Newcontent = ({ topic }) => {
    console.log(topic)
    const [content, setContent] = useState([]);
    const [error, SetError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = "efedecca02977a74908dd0910edfdefb";
            const url = `https://gnews.io/api/v4/search?q=${topic}&apikey=` + apiKey;
            const cacheKey = `news_${topic}`;
            const cachedData = localStorage.getItem(cacheKey);
            if (cachedData) {
                const { data, timestamp } = JSON.parse(cachedData);
                if(!data.articles|| data.articles.length === 0){
                    try {
                        console.log("In not in cache" + topic)
                        const response = await fetch(url);
                        const data = await response.json();
                        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }else if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
                    return data;
                }
            }
            try {
                const response = await fetch(url);
                const data = await response.json();
                localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
                return data;
            } catch (error) {
                throw error;
            }
        };
    
        async function loadData() {
            try {
                const data = await fetchData(topic);
                setContent(data.articles || []);
            } catch (error) {
                SetError(error.message);
            }
        }
        loadData();
    }, [topic])
    return <>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", m: { lg: 10, md: 7, sm: 2, xs: 2 } }}>
            {content && content.length === 0 ? <p>No Articles Found</p> :

                <Box sx={containerSx}>
                    {content.map((article, idx) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={idx}>
                            
                            <Box>
                                <Newscard
                                    title={article.title}
                                    image={article.image}
                                    description={article.description}
                                />
                            </Box>
                        </motion.div>

                    ))}
                </Box>

            }
        </Box>

    </>
}

export default Newcontent