import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
