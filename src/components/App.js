import React from 'react';
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import MoreSearch from './MoreSearch';
import Blog from './Blog';
import Testinomials from './Testinomials';
import Events from './Events';
  
const App= () => {
    return (
    <div>
      <Switch>
       <Route exact path='/' component={Footer}/>
       <Route exact path='/AboutUs' component={AboutUs}/>
       <Route exact path='/MoreSearch' component={MoreSearch}/>
       <Route exact path='/Blog' component={Blog}/>
       <Route exact path='/Testinomials' component={Testinomials}/>
       <Route exact path='/Events' component={Events}/>
      </Switch>
    </div>
    );
}

export default App;