import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import NoMatch from './components/NoMatch/NoMatch';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Posts />
          </Route>
          <Route path="/post/:postId">
            <Comments />
          </Route>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
