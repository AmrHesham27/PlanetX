import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
// import pages 
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ContactUs from './Pages/ContactUs/ContactUs' 
import GameDisplay from './Pages/GameDisplay/GameDisplay'
import Games from './Pages/Games/Games'
import Test from "./Pages/Test/Test"

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path='/' exact render={ () => (<Home />) } />
        <Route path='/About' exact render={ () => (<About />) } />
        <Route path='/Contact' exact render={ () => (<ContactUs />) } />
        <Route path='/City Z' exact render={ () => (<GameDisplay />) } />
        <Route path='/Games' exact render={ () => (<Games />) } />
        <Route path='/Test' exact render={ () => (<Test />) } />
      </Switch >
    </BrowserRouter>
  );
}

export default App;
