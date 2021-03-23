import React from 'react'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './Home/Home';
import Photos from './Photos/Photos';
import PopularCities from './PopularCities/PopularCities';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/photo'>
        <PhotoPage/>
        </Route>
        <Route path='/popularcities'>
          <PopularWeather/>
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}


function HomePage(){
  return <Home/>
}

function PhotoPage() {
  return <Photos/>
}

function PopularWeather(){
  return <PopularCities/>
}

export default App;
