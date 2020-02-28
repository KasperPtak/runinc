import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Components/Layout/Header/Header';
import Home from './Pages/Home'
import Event from './Pages/Events'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">

        < Header />




        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/events" component={Event} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
