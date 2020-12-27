import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import logo from "../../static/images/SchoolLogo.png";
import img1034 from "../../static/images/1034.jpg";
import "./index.css";
function Home() {
  return (
    <div id="bg">
      <div id="mainBox">
        <div id="banner">
          <img id="schoolLogo" src={logo} alt="" />
          <span>深圳技术大学公文通</span>
        </div>
        <img id="img1034" src={img1034} alt="" />
        <Switch>
          <Route path="/Home/Login" component={Login}></Route>
          <Route path="/Home/Register" component={Register}></Route>
          <Redirect from="/Home" to="/Home/Login"></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
