import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Box,
  Button,
  TextField,
  CardContent,
} from '@material-ui/core';
import './SearchAsteroid.scss';

const SearchAsteroid = (props) => {
  const { asteroids } = props;

  const [searchText, setsearchText] = useState(null);

  useEffect(() => {
    /** @method getAllAsteroids will fetch all astroids data */
    props.getAllAsteroids();
  }, []);

  /** @method handleSearch will search for astroid by id */
  const handleSearch = () => {
    if (searchText && searchText.length > 3) {
      props.searchAsteroidById(searchText, props);
    }
  };

  /** @method handleRandom will take any random astroid by id */
  const handleRandom = () => {
    let astroidIds = [];

    asteroids.map((item) => {
      astroidIds.push(item.id);
    });

    let randomId = astroidIds[Math.floor(Math.random() * astroidIds.length)];

    props.history.push(`/asteroid/${randomId}`);
  };

  return (
    <main>
      <Container>
        <Box className='box-container'>
          <Card className='card'>
            <CardContent className='card-container'>
              <TextField
                className='full-width'
                id='asteroid-id'
                label='Asteroid Id'
                placeholder='Enter Asteroid Id'
                variant='outlined'
                onChange={(e) => setsearchText(e.target.value)}
              />

              <Button
                disabled={!searchText || searchText.length < 3}
                onClick={handleSearch}
                className='full-width'
                variant='contained'
                color='primary'>
                Submit
              </Button>

              <Button
                onClick={handleRandom}
                className='full-width'
                variant='outlined'
                color='primary'>
                Random Asteroid
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </main>
  );
};

export default SearchAsteroid;
