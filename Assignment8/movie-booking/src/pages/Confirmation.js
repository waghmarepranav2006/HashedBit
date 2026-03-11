import React from 'react';

const Confirmation = ({ details }) => {
  if (!details) return <h2>No Booking Found.</h2>;

  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div style={{ textAlign: 'center', border: '2px solid green', padding: '30px', borderRadius: '15px' }}>
      <h1>Seat Booked Successfully!</h1>
      <h3>Booking ID: {bookingId}</h3>
      <div style={{ textAlign: 'left', display: 'inline-block' }}>
        <p><strong>Name:</strong> {details.name}</p>
        <p><strong>Email:</strong> {details.email}</p>
        <p><strong>Mobile:</strong> {details.mobile}</p>
      </div>
      <br /><br />
      <button onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
};

export default Confirmation;