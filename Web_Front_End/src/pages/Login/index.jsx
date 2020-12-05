import {NavLink} from 'react-router-dom'


function Login() {
  return (
    <div>
      <div>Login</div>
      <NavLink to="/Register">Register</NavLink>
      <NavLink to="/Home">Home</NavLink>
    </div>
  )
}

export default Login