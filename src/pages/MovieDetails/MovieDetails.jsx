import { useEffect, useState } from 'react';

import { Link, Outlet, useParams } from 'react-router-dom';

import { theMoviedbAPI } from 'api/theMoviedbAPI';

import { Description } from 'components';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: black;
  padding: 10px;

  &.active {
    color: orange;
  }
`;

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const responseData = await theMoviedbAPI.getMovieDetails(movieId);
      console.log(JSON.stringify(responseData));
      setMoviesData(responseData);
    } catch (error) {
      // setError(error)
    } finally {
      // setIsLoading(false);
    }
  };

  console.log ('moviesData?.title ' + moviesData?.title)

  return (
    <div>
      <h1> Movie Details </h1>
      { moviesData.title &&  <Description moviesData={moviesData} />}
      <nav>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};

{/* <div
style={{
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
}}
> */}
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
