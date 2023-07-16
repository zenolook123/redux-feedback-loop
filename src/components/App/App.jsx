import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../NavBar/NavBar';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Submit from '../Submit/Submit.jsx'


import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom';

import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()

  axios.get('/feedback').then(response => {
    console.log('response is', response.data)
    dispatch({
      type:"SET_FEEDBACK",
      payload:response.data
    })
    
}).catch(err => {
    console.log("error in get index", err)
})

  return (
    <Router>
    <div className='App'>
      <NavBar />

      <Route exact path = '/'>
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

      <Route exact path = '/submit'>
      <Submit />
      </Route>

    </div>
    </Router>
  );
}

export default App;
