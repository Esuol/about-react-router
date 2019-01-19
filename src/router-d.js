import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

 const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public"> public pages</Link>
        </li>
        <li>
          <Link to="/protected"> protected pages</Link>
        </li>
      </ul>

      <Route path="/public" component={Public}></Route>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
)
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100); // fake async
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100); // fake async
  }

}

const AuthButton = withRouter(
  ({history}) =>
    fakeAuth.isAuthenticated ? (
      <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
    ):(
      <p>You are not logged in.</p>
    )
  )

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }



  const Public = () => <h3>public</h3>
  const Protected = () => <h3>Protected</h3>

  class Login extends React.Component{
    state = { redirectToReferrer:false }
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState({redirectToReferrer:true})
      })
    }

    render () {
      let {from} = this.props.location.state || {from:{pathname:'/'}}
      let {redirectToReferrer} = this.state
      if(redirectToReferrer) return <Redirect to={from} />
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }

  }

export default AuthExample