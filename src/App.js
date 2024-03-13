import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Homepage from './Homepage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? <Login onLogin={handleLogin} /> : <Homepage username={username} />}
    </div>
  );
}

export default App;
