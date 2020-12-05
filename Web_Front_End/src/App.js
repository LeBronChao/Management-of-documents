import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Login} path="/Login"></Route>
        <Route component={Register} path="/Register"></Route>
        <Route component={Home} path="/Home"></Route>
        <Redirect from="/" to="/Login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
