import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your Spring Boot API endpoint
    fetch('http://localhost:8080/api/greeting?name=User')
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: Status: ${response.status}`
          );
        }
        return response.json(); // Parse the JSON data
      })
      .then(data => {
        setMessage(data.content); // Access the specific field
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display the text from the JSON response
  return (
    <div>
      <h1>Message from Spring Boot:</h1>
      <p>{message}</p>
    </div>
  );
}

export default DataFetcher;
