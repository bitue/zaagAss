import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Country from './components/Country/Country';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route exact path='/country/:country'>
            <Country></Country>

          </Route>


        </Switch>
      
      </BrowserRouter>
      
   
     
    </div>
  );
}

export default App;
