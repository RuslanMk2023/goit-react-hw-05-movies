import styles from './Description.module.css';

export const Description = ({ moviesData }) => {
  const { title, overview, poster_path, vote_average, genres, id } = moviesData;

  console.log('Description ' + moviesData?.title);
  return (
    <div className={styles.description}>
      <img
        className={styles.description_image}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`img-${id}`}
      />

<div className={styles.description_info}>
        <h3>{title}</h3>

        Overview:
        <p>{overview}</p>

        Rating:
        <p>{vote_average}</p>

        Genres:
        <p>
          {genres.map(({ name, index }) => (
            <span key={index}>{` ${name} `}</span>
          ))}
        </p>
        </div>
    </div>
  );
};

const ter = {
  backdrop_path: '/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg',
  genres: [
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' },
    { id: 28, name: 'Action' },
  ],
  id: 76600,
  imdb_id: 'tt1630029',
  original_title: 'Avatar: The Way of Water',
  overview:
    'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
  popularity: 4203.678,
  poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',

  title: 'Avatar: The Way of Water',
  vote_average: 7.723,
  vote_count: 7254,
};

const cat = {
  adult: false,
  backdrop_path: '/5Y5pz0NX7SZS9036I733F7uNcwK.jpg',
  belongs_to_collection: null,
  budget: 18000000,
  genres: [
    { id: 27, name: 'Horror' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'https://www.thepopes-exorcist.movie',
  id: 758323,
  imdb_id: 'tt13375076',
  original_language: 'en',
  original_title: "The Pope's Exorcist",
  overview:
    "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
  popularity: 1630.483,
  poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
  production_companies: [
    {
      id: 3287,
      logo_path: '/bz6GbCQQXGNE56LTW9dwgksW0Iw.png',
      name: 'Screen Gems',
      origin_country: 'US',
    },
    {
      id: 84792,
      logo_path: '/7Rfr3Zu6QnHpXW2VdSEzUminAQd.png',
      name: '2.0 Entertainment',
      origin_country: 'US',
    },
    { id: 177894, logo_path: null, name: 'Jesus & Mary', origin_country: '' },
    { id: 177895, logo_path: null, name: 'Worldwide Katz', origin_country: '' },
    {
      id: 177896,
      logo_path: null,
      name: 'Loyola Productions',
      origin_country: '',
    },
    { id: 194987, logo_path: null, name: 'FFILME.RO', origin_country: '' },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2023-04-05',
  revenue: 36000000,
  runtime: 103,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
    { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
    { english_name: 'Latin', iso_639_1: 'la', name: 'Latin' },
    { english_name: 'Spanish', iso_639_1: 'es', name: 'Español' },
  ],
  status: 'Released',
  tagline:
    'Inspired by the actual files of Father Gabriele Amorth, Chief Exorcist of the Vatican.',
  title: "The Pope's Exorcist",
  video: false,
  vote_average: 6.7,
  vote_count: 92,
};
