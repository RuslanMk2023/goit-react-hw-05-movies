import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { theMoviedbAPI } from 'api/theMoviedbAPI';

const details = {
  adult: false,
  backdrop_path: '/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg',
  id: 640146,
  title: 'Ant-Man and the Wasp: Quantumania',
  original_language: 'en',
  original_title: 'Ant-Man and the Wasp: Quantumania',
  overview:
    "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
  poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  media_type: 'movie',
  genre_ids: [28, 12, 878],
  popularity: 1714.615,
  release_date: '2023-02-15',
  video: false,
  vote_average: 6.398,
  vote_count: 1391,
};

export const Movies = () => {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async() => {
    try {
      setIsLoading(true)
      const responseData = await theMoviedbAPI.getTrendingMovieDay();
      // console.log(JSON.stringify(responseData));
      setAllMoviesData(responseData);
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h2> Trending today</h2>
      <ul>
        {!isLoading && allMoviesData.map(({ title, id }, index) => (
          <li key={index}>
            <NavLink to={`${id}`}> {title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
