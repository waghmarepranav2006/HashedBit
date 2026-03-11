import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{ width: '300px' }} />
      <p style={{ maxWidth: '600px', margin: '20px auto' }}>{movie.desc}</p>
      <Link to={`/book/${movie.id}`}>
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetail;