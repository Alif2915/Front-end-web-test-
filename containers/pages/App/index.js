import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import { store } from '../../../config';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/home" component={Home} />
        </Router>
    </Provider>
  )
} 

export default App;
