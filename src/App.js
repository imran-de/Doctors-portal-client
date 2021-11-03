import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dental-services">

          </Route>
          <Route path="reviews">

          </Route>
          <Route path="/blog">

          </Route>
          <Route path="/contact-us">

          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
