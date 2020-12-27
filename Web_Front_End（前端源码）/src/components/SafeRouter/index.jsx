import { Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'

function SafeRouter({ component: Component, ...rest }) {
  let user = JSON.parse(sessionStorage.getItem('sztu_doc_user'))
  useEffect(() => {
    if (!user || user.jur == 3)
      alert('权限不足，请登录后重试！')
  }, [])

  return (
    <Route
      {...rest}
      render={props =>
        !user || user.jur == 3 ?
          (
            <Redirect to={{
              pathname: '/Home/Login'
            }} />
          ) : (
            <Component {...props} />
          )
      }
    />
  )
}

export default SafeRouter;
