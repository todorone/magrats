import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider, connect } from 'react-redux'

import Routes from './Routes'
import store from '../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../actions/data'
import { initializeFirebase } from '../actions/firebase'
import { setProfileScreenToMyself } from '../actions/screens'

class App extends Component {
  state = {
    isInitialized: false,
  }

  async componentWillMount () {
    // console.log('environment:', process.env.NODE_ENV)
    const { dispatch } = this.props

    await Promise.all([
      dispatch(fetchUsers()),
      dispatch(fetchComments()),
      dispatch(fetchPosts()),
      dispatch(initializeFirebase())
    ])

    this.setState({ isInitialized: true })
  }

  attachHook = (prevState, nextState, action) => {
    // When switching to Profile screen through main tabs, set user id to myself
    if ((action.type === 'Navigation/NAVIGATE') && (action.routeName === 'MyProfile')) {
      this.props.dispatch(setProfileScreenToMyself())
    }
  }

  render () {
    return (this.state.isInitialized &&
      <View style={StyleSheet.absoluteFill}>
        <Routes onNavigationStateChange={this.attachHook} />
      </View>
    )
  }
}

const ConnectedApp = connect()(App)

// ==========

const ReduxWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default ReduxWrapper
