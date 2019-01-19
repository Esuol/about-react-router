import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/About" exact component={About} />
      <Route path="/Users" exact component={Users} />
    </div>
  </Router>
)
export default AppRouter