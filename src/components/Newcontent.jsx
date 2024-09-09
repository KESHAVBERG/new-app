import { Box } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import Newscard from './Newscard';
import { motion } from 'framer-motion';

const containerSx = {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(1, 1fr)', 
    '@media (min-width:600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)', 
    },
    '@media (min-width:1100px)': {
        gridTemplateColumns: 'repeat(3, 1fr)', 
    },
    '@media (min-width:1200px)': {
        gridTemplateColumns: 'repeat(3, 1fr)', 
    },
    padding: '16px',
    boxSizing: 'border-box',
};

const CACHE_EXPIRY_DAYS = 3;
const CACHE_EXPIRY_MS = CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

const Newcontent = ({ topic, language }) => {
    const [content, setContent] = useState([]);
    const [error, SetError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = "efedecca02977a74908dd0910edfdefb";
            const url = `https://gnews.io/api/v4/search?q=${topic}&lang=${language}&apikey=` + apiKey;
            console.log(url)
            const cacheKey = `news_${topic}_${language}`;
            const cachedData = localStorage.getItem(cacheKey);
            if (cachedData) {
                const { data, timestamp } = JSON.parse(cachedData);
                if (!data.articles || data.articles.length === 0) {
                    try {
                        console.log("In not in cache" + topic)
                        const response = await fetch(url);
                        const data = await response.json();
                        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
                        return data;
                    } catch (error) {
                        throw error;
                    }
                } else if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
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

    }, [topic, language])

    useEffect(()=>{
        console.log(content)
    }, [content])
    return <>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", m: { xl: 10, lg: 10, md: 7, sm: 2, xs: 2 } }}>
            {error ? <p>{error}</p> : <p></p>}
            {content && content.length === 0 ? <p>No Articles Found</p> :
                <Box sx={containerSx}>
                    {content.map((article, idx) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration:0.5}}
                            key={idx}
                        >
                                <Newscard
                                    title={article.title}
                                    image={article.image}
                                    description={article.description}
                                    content = {article.content}
                                />
                        </motion.div>

                    ))}
                </Box>
            }
        </Box>

    </>
}

export default Newcontent