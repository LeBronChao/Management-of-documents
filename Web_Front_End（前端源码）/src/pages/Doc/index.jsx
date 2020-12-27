import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DocList from './DocList'
import DocPub from './DocPub';
import DocManage from './DocManage'
import UserManage from './UserManage'
import Detail from './Detail'
import './index.css'
import School from '../../static/images/school.png'
import ManageDetail from './MangeDetail'
import SafeRouter from '../../components/SafeRouter'

function Doc(props) {
  let [nav_show, setnav_show] = useState(false)
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('sztu_doc_user'))
    if (!user) {
      alert('请登录后重试')
      props.history.push('/Home/Login')
    } else {
      setnav_show(user.jur > 2 ? "none" : "flex")
    }
  }, [])

  return (
    <div>
      <header className="doc-header-container sp">
        <div className="doc-header row">
          <img src={School} alt="" className="doc-header-school" />
          <nav className="doc-header-nav row">
            <NavLink
              to="/Doc/DocList"
              className="doc-header-nav-item center"
              activeClassName="doc-header-nav-item-active"
            >
              公文展示
            </NavLink>
            <NavLink
              to="/Doc/DocPub"
              className="doc-header-nav-item center"
              activeClassName="doc-header-nav-item-active"
              style={{ display: nav_show }}
            >
              发布公文
            </NavLink>
            <NavLink
              to="/Doc/DocManage"
              className="doc-header-nav-item center"
              activeClassName="doc-header-nav-item-active"
              style={{ display: nav_show }}
            >
              公文管理
            </NavLink>
            <NavLink
              to="/Doc/UserManage"
              className="doc-header-nav-item center"
              activeClassName="doc-header-nav-item-active"
              style={{ display: nav_show }}
            >
              用户管理
            </NavLink>
            <NavLink
              to="/Home"
              className="doc-header-nav-item center"
              activeClassName="doc-header-nav-item-active"
              onClick={_ => {
                sessionStorage.removeItem('sztu_doc_user')
                sessionStorage.removeItem('sztu_doc_token')
              }
              }
            >
              退出
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="doc-router-view-container sp">
        <div className="doc-router-view">
          <Switch>
            <Route path="/Doc/DocList" component={DocList}></Route>
            <SafeRouter path="/Doc/DocPub" component={DocPub}></SafeRouter>
            <SafeRouter path="/Doc/DocManage" component={DocManage}></SafeRouter>
            <SafeRouter path="/Doc/UserManage" component={UserManage}></SafeRouter>
            <Route path="/Doc/Detail/:doc_no" component={Detail}></Route>
            <SafeRouter path="/Doc/ManageDetail/:doc_no" component={ManageDetail}></SafeRouter>
            <Redirect from="/Doc" to="/Doc/DocList"></Redirect>
          </Switch>
        </div>
      </main>
      <footer className="doc-footer-container sp">
        <div className="doc-footer center">
          Copyright © 公文管理系统 · Developed by ChaoWeiwen, XieSenhao, HongQijun,
          ChenXin
        </div>
      </footer>
    </div>
  );
}

export default Doc;
