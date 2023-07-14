import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../NavBar/NavBar';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'


import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom';

import { useDispatch } from 'react-redux';


function App() {

  axios.get('/').then(response => {
    console.log('response is', response.data)
}).catch(err => {
    console.log("error in get index", err)
})

  return (
    <Router>
    <div className='App'>
      <NavBar />

      <Route exact path = '/feeling'>
      <Feeling />
      </Route>

      <Route exact path = '/understanding'>
      <Understanding />
      </Route>

      <Route exact path = '/support'>
      <Support />
      </Route>

      <Route exact path = '/comments'>
      <Comments />
      </Route>

    </div>
    </Router>
  );
}

export default App;
