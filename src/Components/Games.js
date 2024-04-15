// Import necessary libraries and hooks
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Grid, Box } from '@mui/material';

function Games() {
  const [searchParams, setSearchParams] = useSearchParams();
  const year = searchParams.get('year');
  const [games, setGames] = useState([]);
  const [inputYear, setInputYear] = useState(year || '');

  useEffect(() => {
    axios.get(`http://fs1.co.il/bus/xbox1.php`)
      .then(response => {
        const filteredGames = year ? response.data.filter(game => game.Year.toString() === year) : response.data;
        setGames(filteredGames);
      })
      .catch(error => console.error('Error fetching games:', error));
  }, [year]);


  
  const handleYearChange = (event) => {
    setInputYear(event.target.value);
    setSearchParams(event.target.value ? { year: event.target.value } : {});
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <TextField
        label="Filter by Year"
        variant="outlined"
        type="number"
        value={inputYear}
        onChange={handleYearChange}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2}>
        {games.length > 0 ? (
          games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    <a href={game.GameLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      {game.Game}
                    </a>
                  </Typography>
                  <Typography color="text.secondary">{game.Genre}</Typography>
                  <Typography>Developer: {game.Dev}</Typography>
                  <Typography>Publisher: {game.Publisher}</Typography>
                  <Typography>Platform: {game.Platform}</Typography>
                  <Typography>Year: {game.Year}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" component="h2">No games found {year ? `for the year ${year}` : ""}.</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Games;
