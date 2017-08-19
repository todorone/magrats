import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider, connect } from 'react-redux'

import Root from './Root'
import store from '../../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../../actions/data'
import { hookNavigation } from './navigationHook'
import { initializeFirebase } from '../../actions/firebase'

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
    hookNavigation(action, this.props.dispatch)
  }

  render () {
    return (this.state.isInitialized &&
      <View style={StyleSheet.absoluteFill}>
        <Root onNavigationStateChange={this.attachHook} />
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
