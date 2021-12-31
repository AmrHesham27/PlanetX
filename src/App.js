// react
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useState } from "react"
// css
import './App.css'
// fallback
import Fallback from './Pages/fallback';

function App() {
  // lazy compnents 
  const Home = lazy(() => import('./Pages/Home/Home'));
  const About = lazy(() => import('./Pages/About/About'));
  const ContactUs = lazy(() => import('./Pages/ContactUs/ContactUs'));
  const GameDisplay = lazy(() => import('./Pages/GameDisplay/GameDisplay'));
  const Booking = lazy(() => import('./Pages/Booking/Booking'));
  const GamesCompnent = lazy(() => import('./Pages/Games/Games'));
  const Games = () => {
    return (
        <Suspense fallback={<Fallback/>}>
          <GamesCompnent gamesData={gamesData} />
        </Suspense>
    );
  }

  const App = () => (
    <BrowserRouter>
        <Suspense fallback={<Fallback/>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/ContactUs" component={ContactUs}/>
            <Route exact path="/City Z" component={GameDisplay}/>
            <Route exact path="/Games" component={Games}/>
            <Route exact path="/Booking" component={Booking}/>
          </Switch>
        </Suspense>
    </BrowserRouter>
  );

  // all games fetch
  const [gamesData, setGamesData] = useState(undefined)
  if (!gamesData) {
  fetch("https://planetxegy.herokuapp.com/games/all", {
  method: "GET",
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }})
  .then(async function(response) {
      const res = await response.json()
      if (res.status === true) {
        setGamesData(res.data)
      }
  })       
  .catch(err => {
      console.log(err)
  })}

  return (
    <App/>
  );
}

export default App;
