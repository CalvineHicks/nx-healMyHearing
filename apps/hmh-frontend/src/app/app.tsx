import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  //TODO: add logo to header
  return (
    <div className='app'>
      <Router>
      <header className='flex'>
        <Logo width='75' height='75' />
        <h1>Heal My Hearing</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
      </header>
      <main>
          <div>
            <Switch>
              <Route path='/about'>
                <div>about</div>
              </Route>
              <Route path='/users'>
                <div>user</div>
              </Route>
              <Route path='/'>
                <div>home</div>
              </Route>
            </Switch>
          </div>
      </main>
      </Router>
    </div>
  );
};

export default App;
