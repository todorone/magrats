import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactHint from 'react-hint'
import styled from 'styled-components'

import Home from './Home'
import Explore from './Explore'
import Profile from './Profile'
import Header from './header/Header'

class App extends Component {
  render () {
    return (
      <Router>
        <Container>
          <Header />

          <Content>
            <Route exact path='/' component={Home} />
            <Route path='/explore' component={Explore} />
            <Route path='/profile' component={Profile} />
          </Content>
          <ReactHint />
        </Container>
      </Router>
    )
  }
}

export default App

// =====
const Container = styled.div`
`
const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
