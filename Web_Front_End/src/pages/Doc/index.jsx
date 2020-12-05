import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import DocList from './DocList'
import DocManage from './DocManage'
import UserManage from './UserManage'


function Doc() {
  return (
    <div>
      <div>Doc</div>
      <NavLink to="/Home">退出</NavLink>
      <div>
        <NavLink to="/Doc/DocList">DocList</NavLink>
      </div>
      <div>
        <NavLink to="/Doc/DocManage">DocManage</NavLink>
      </div>
      <div>
        <NavLink to="/Doc/UserManage">UserManage</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/Doc/DocList" component={DocList}></Route>
          <Route path="/Doc/DocManage" component={DocManage}></Route>
          <Route path="/Doc/UserManage" component={UserManage}></Route>
          <Redirect from="/Doc" to="/Doc/DocList"></Redirect>
        </Switch>
      </div>
    </div>
  )
}

export default Doc