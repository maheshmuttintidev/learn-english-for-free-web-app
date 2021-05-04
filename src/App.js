import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
