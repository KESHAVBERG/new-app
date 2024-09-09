import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Container, InputBase, Paper, InputAdornment, IconButton, Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Newscard from './Newscard';

const paperSx = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: 2,
  boxShadow: 0.5,
  border: '1px solid black',
  width: '100%',
  maxWidth: 600,
};

const inputSx = {
  ml: 1,
  flex: 1,
  py: 1,
  px: 2,
  width: "100%"
};

const cardboxSx = {
  flexBasis: {
    xs: '100%',
    sm: '50%',
    md: '33.33%',
    lg: '25%',
    xl: '25%'
  },
  p: 1
};

const CACHE_EXPIRY_MINUTES = 15;
const CACHE_EXPIRY_MS = CACHE_EXPIRY_MINUTES * 60 * 1000;

const Search = ({ lang }) => {
  const searchInputRef = useRef(null);
  const [content, setContent] = useState([]);
  const [error, SetError] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = useCallback(async (topic) => {
    const apiKey = "efedecca02977a74908dd0910edfdefb";
    const url = `https://gnews.io/api/v4/search?q=${topic}&lang=${lang}&apikey=` + apiKey;
    const cacheKey = `news_${topic}_${lang}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (!data.articles || data.articles.length === 0) {
        try {
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
  }, [lang]);

  const loadData = useCallback(async (topic) => {
    try {
      const data = await fetchData(topic);
      setContent(data.articles || []);
    } catch (error) {
      SetError(error.message);
    }
  }, [fetchData]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = searchInputRef.current.value;
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const savedSearchTerm = sessionStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
      loadData(savedSearchTerm);
    }
  }, [loadData]);

  useEffect(() => {
    if (searchTerm) {
      sessionStorage.setItem('searchTerm', searchTerm);
      loadData(searchTerm);
    }
  }, [searchTerm, loadData]);

  return <>
    <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper sx={paperSx}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <InputBase
            inputRef={searchInputRef}
            sx={inputSx}
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit(event);
              }
            }}
          />
        </form>
      </Paper>
    </Container>
    <Container sx={{ mt: 4 }}>
      {error && (<h5>{error}</h5>)}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {content.length > 0 ? (
          content.map((item, idx) => (
            <Box
              key={idx}
              sx={cardboxSx}
            >
              <Newscard
                title={item.title}
                description={item.description}
                image={item.image}
                content={item.content}
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
            No results found
          </Typography>
        )}
      </Box>
    </Container>
  </>


}

export default Search