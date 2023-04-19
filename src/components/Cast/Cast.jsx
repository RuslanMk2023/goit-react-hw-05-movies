import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { theMoviedbAPI } from 'api/theMoviedbAPI';

const actor = {
  cast: [
    {
      adult: false,
      gender: 2,
      id: 934,
      known_for_department: 'Acting',
      name: 'Russell Crowe',
      original_name: 'Russell Crowe',
      popularity: 50.131,
      profile_path: '/fbzD4utSGJlsV8XbYMLoMdEZ1Fc.jpg',
      cast_id: 2,
      character: 'Father Gabriele Amorth',
      credit_id: '62ba6d6d12aabc0095e0c915',
      order: 0,
    },
  ],
};

export const Cast = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const responseData = await theMoviedbAPI.getMovieCast(movieId);
      console.log(JSON.stringify(responseData));
      setMoviesData(responseData);
    } catch (error) {
      // setError(error)
    } finally {
      // setIsLoading(false);
    }
  };

  return <>Cast</>;
};
