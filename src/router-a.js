import React from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"

 const App = () => (
   <Router>
     <div>
       <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/topics" component={Topics}></Route>
     </div>
   </Router>
 )

 const Home = () => <h2>Home</h2>;

 const About = () => <h2>About</h2>;



 const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}></Route>
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
  )

  const Topic= ({match}) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
    )

  const Header = () => (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="about">about</Link>
      </li>
      <li>
        <Link to="topics">topics</Link>
      </li>
    </ul>
  )

  export default App
