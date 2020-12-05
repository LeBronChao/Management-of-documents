import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import DocList from './DocList'
import DocManage from './DocManage'
import UserManage from './UserManage'


function Home() {
  return (
    <div>
      <div>Home</div>
      <NavLink to="/Login">退出</NavLink>
      <div>
        <NavLink to="/Home/DocList">DocList</NavLink>
      </div>
      <div>
        <NavLink to="/Home/DocManage">DocManage</NavLink>
      </div>
      <div>
        <NavLink to="/Home/UserManage">UserManage</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/Home/DocList" component={DocList}></Route>
          <Route path="/Home/DocManage" component={DocManage}></Route>
          <Route path="/Home/UserManage" component={UserManage}></Route>
          <Redirect from="/Home" to="/Home/DocList"></Redirect>
        </Switch>
      </div>
    </div>
  )
}

export default Home