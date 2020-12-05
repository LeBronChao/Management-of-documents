import {NavLink} from 'react-router-dom'


function Login() {
  return (
    <div>
      <div>Login</div>
      <NavLink to="/Home/Register">Register</NavLink><br/>
      <NavLink to="/Doc">Home</NavLink>
    </div>
  )
}

export default Login