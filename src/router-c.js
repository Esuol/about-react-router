import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">zillow-group</Link>
          </li>
          <li>
            <Link to="/yahoo">yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">modus-create</Link>
          </li>
        </ul>
        <Route path="/:id" component={Child} />

        <Route path="/order/:direction(asc|desc)" component={ComponentWidthRegex} />
      </div>
    </Router>
  )
}

const Child = ({match}) => <h3>ID: {match.params.id}</h3>

const ComponentWidthRegex = ({match}) => <h3>only asc/desc are allowed:{match.params.direction}</h3>
