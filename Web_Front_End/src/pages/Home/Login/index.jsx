import { NavLink } from "react-router-dom";
import "./index.css";
import logo from "../../../static/images/SchoolLogo.png";
import img1034 from "../../../static/images/1034.jpg";

function Login(props) {
  const navToHome = function () {
    props.history.push("/Doc");
  };
  return (
    <div id="bg">
      <div id="mainBox">
        <div id="banner">
          <img id="schoolLogo" src={logo} alt="" />
          <span>深圳技术大学公文通</span>
        </div>
        <img id="img1034" src={img1034} alt="" />
        <div id="subBox">
          <div id="loginText">登录</div>
          <input type="text" name="" id="account" value={"账号"} />
          <input type="text" name="" id="password" value={"密码"} />
          <p id="fg_pw">忘记密码</p>
          <button id="loginBtn" onClick={navToHome}>
            登录
          </button>
          <p id="rigisterText">
            没有账号？
            <NavLink id="nl_rg" to="/Home/Register">
              立即注册
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
