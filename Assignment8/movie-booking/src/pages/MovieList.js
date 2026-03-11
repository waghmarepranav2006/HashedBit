import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../movies';

const MovieList = () => {
  return (
    <div>
      <h1>Movies</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px' 
      }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%' }} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;