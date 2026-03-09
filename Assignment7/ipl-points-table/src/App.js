import React, { useState, useEffect } from 'react';

function App() {
  const [iplData, setIplData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching and Sorting Logic
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        
        // Surgical Requirement: Sort ascending based on NRR
        // Logic: (a.NRR - b.NRR) sorts from -0.506 (lowest) to 0.316 (highest)
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        
        setIplData(sorted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching IPL data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '20px' }}>Loading Points Table...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>IPL Season 2022 Points</h1>
      
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>No</th>
            <th style={{ padding: '10px' }}>Team</th>
            <th style={{ padding: '10px' }}>Matches</th>
            <th style={{ padding: '10px' }}>Won</th>
            <th style={{ padding: '10px' }}>Lost</th>
            <th style={{ padding: '10px' }}>Tied</th>
            <th style={{ padding: '10px' }}>NRR</th>
            <th style={{ padding: '10px' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {iplData.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '10px' }}>{item.No}</td>
              <td style={{ padding: '10px' }}>{item.Team}</td>
              <td style={{ padding: '10px' }}>{item.Matches}</td>
              <td style={{ padding: '10px' }}>{item.Won}</td>
              <td style={{ padding: '10px' }}>{item.Lost}</td>
              <td style={{ padding: '10px' }}>{item.Tied}</td>
              <td style={{ padding: '10px' }}>{item.NRR}</td>
              <td style={{ padding: '10px' }}>{item.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;