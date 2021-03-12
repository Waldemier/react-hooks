import React from 'react'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/alertState'
import {GitHubState} from './context/github/githubState'

function App() {
  return (

    <GitHubState>
      <AlertState>
        <BrowserRouter>

          <Navbar />

          <div className="container pt-4">
            <Alert />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>

        </ BrowserRouter>
      </AlertState>
    </GitHubState>

  );
}

export default App;
