import { Route, Routes, NavLink } from 'react-router-dom';

import { Home, Movies, MovieDetails, NotFound } from 'pages';
import { Cast, Reviews } from 'components';


import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  padding: 10px;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <nav>
        <StyledLink to="/" end> Home </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
