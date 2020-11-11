import React, { Component } from 'react'
import { Button, message } from 'antd';
import {HashRouter, BrowserRouter, Switch, Route} from 'react-router-dom'

import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login.js'

class App extends Component {
  handleClick = () => {
    message.success('成功啦')
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
