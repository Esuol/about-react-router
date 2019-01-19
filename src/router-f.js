import React, {Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter} from 'react-router-dom'


const One = () => <h3>One</h3>
const NotFound = () => <h3>NotFound</h3>

class App extends Component {
  constructor(props){
    super(props)
    props.histroy.listen((location) => {
      switch(location.pathname){
        case '/one/users':
        document.title = 'users'
        break;
        case '/one/companies':
        document.title = 'companies'
        break;
        default:
        break;
      }
    })
  }

  render () {
    return (
      <div className="app">
        <NavLink to="/one/users">users</NavLink>
        <NavLink to="/one/companies">companies</NavLink>
        <Switch>
          <Route path="/one/:type?" component={One} />
          <Redirect from="/" to="/one" exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)