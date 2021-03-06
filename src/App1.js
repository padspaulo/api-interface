import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';


const App1 = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/annual' component={AnnualReport} />
          <Route path='/team' component={Teams} />
          <Route path='/blogs' component={Blogs} />
        </Switch>
    </Router>
  );
};

export default App1;