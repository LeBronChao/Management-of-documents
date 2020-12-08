import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './Login'
import Register from './Register'


function Home() {
  return (
      <div id="home">
        <Switch>
          <Route path="/Home/Login" component={Login}></Route>
          <Route path="/Home/Register" component={Register}></Route>
          <Redirect from="/Home" to="/Home/Login"></Redirect>
        </Switch>
      </div>
  )
}

export default Home