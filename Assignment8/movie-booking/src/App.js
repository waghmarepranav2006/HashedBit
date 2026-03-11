import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import BookingForm from './pages/BookingForm';
import Confirmation from './pages/Confirmation';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/book/:id" element={<BookingForm setBookingDetails={setBookingDetails} />} />
          <Route path="/confirmation" element={<Confirmation details={bookingDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;