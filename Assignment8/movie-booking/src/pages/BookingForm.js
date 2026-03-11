import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = ({ setBookingDetails }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingDetails({ ...formData, movieId: id });
    navigate('/confirmation');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" required onChange={e => setFormData({...formData, email: e.target.value})} />
        <input type="tel" placeholder="Mobile" required onChange={e => setFormData({...formData, mobile: e.target.value})} />
        <button type="submit" style={{ padding: '10px', background: 'green', color: 'white' }}>Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;