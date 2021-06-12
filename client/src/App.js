import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link} from 'react-router-dom';
import { clicks } from './clicks';
import { Shortenurl } from './Shortenurl';
import { longurl } from './longurl';

function App() {
  
 return (
   <div>
   <nav className = "navbar navbar-expand-lg navbar-light bg-light">
   <ul className ="navbar-nav mr-auto">
   <li className = "nav-item active">
   <Link to ="/" className = "nav-link">shortenurl</Link>
   </li>
   <li className="nav-item active">
   <Link to ="/clicks" className = "nav-link">clicks</Link>
   </li>
   </ul>
   </nav>
  <Switch>
    <Route exact path = "/" component={Shortenurl}/>
    <Route path = "/longurl" component={longurl}/>
    <Route path = "/clicks" component={clicks}/>
  </Switch>
</div>
 );
}

export default App;