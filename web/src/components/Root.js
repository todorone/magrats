import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactHint from 'react-hint'
import styled from 'styled-components'

import Home from './screens/Home'
import Explore from './screens/Explore'
import Profile from './screens/Profile'
import Header from './header/Header'
import { ALMOST_WHITE } from './styles'

class Root extends Component {
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

export default Root

// =====
const Container = styled.div`
`
const Content = styled.div`
  min-height: 100vh;
  
  background-color: ${ALMOST_WHITE}
`
