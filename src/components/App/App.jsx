import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../NavBar/NavBar';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'


import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom';



function App() {

  return (
    <Router>
    <div className='App'>
      <NavBar />
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
    </div>
    </Router>
  );
}

export default App;
