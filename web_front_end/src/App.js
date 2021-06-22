import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import Doc from './pages/Doc'
import Home from './pages/Home'
import './api/main'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Doc} path="/Doc"></Route>
        <Route component={Home} path="/Home"></Route>
        <Redirect from="/" to="/Home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
