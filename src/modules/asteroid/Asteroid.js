import React, { useEffect } from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
} from '@material-ui/core';

const Asteroid = (props) => {
  const { selectedAsteroid, loading } = props;
  useEffect(() => {
    props.searchAsteroidById(props.match.params.id);
  }, []);

  return (
    <Container>
      <Box className='box-container'>
        <Card className='card'>
          {!loading && selectedAsteroid ? (
            <CardContent className='card-container'>
              <h1>Name: {selectedAsteroid.name}</h1>
              <p>Name: {selectedAsteroid.nasa_jpl_url}</p>
              <Button
                onClick={() =>
                  window.open(`${selectedAsteroid.nasa_jpl_url}`, '_blank')
                }
                className='full-width'
                variant='outlined'
                color='primary'>
                Go To URL
              </Button>
              <br />
              {selectedAsteroid.is_potentially_hazardous_asteroid ? (
                <Button
                  className='full-width'
                  variant='contained'
                  color='secondary'>
                  Hazardous
                </Button>
              ) : (
                <Button
                  className='full-width'
                  variant='contained'
                  color='primary'>
                  Not Hazardous
                </Button>
              )}
            </CardContent>
          ) : (
            <CardContent className='card-container'>
              <CircularProgress />
            </CardContent>
          )}
        </Card>
      </Box>
    </Container>
  );
};

export default Asteroid;
