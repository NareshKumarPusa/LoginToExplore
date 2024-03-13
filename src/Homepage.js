import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Homepage = ({ username }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Jokes Repository: Table Edition</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Homepage;
