import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Navigation'
import Home from './Home'
import CardsRouter from './CardsRouter'
import LoginForm from './LoginForm'
import Auth from './authAdapter'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {

  state = {
    auth: {
      isLoggedIn: false,
      user: {}
    }
  }
  componentWillMount(){
  }
  logout(){
  }
  logIn(loginParams){
  }

  render () {
    return (
        <Router history={history}>
          <div>
            <Navigation auth={this.state.auth} logout={this.logout.bind(this)}/>
            <Route exact path='/' render={()=>{
              return this.state.auth.isLoggedIn ? <Home /> : <Redirect to="/login"/>
            }} />
            <Route path='/cards' component={CardsRouter} />
            <Route path='/login' render={() =>{
              return this.state.auth.isLoggedIn ? <Redirect to="/"/> : <LoginForm onSubmit={this.logIn.bind(this)}/>}
            }/>
          </div>
        </Router>
      )
  }
}

export default App
