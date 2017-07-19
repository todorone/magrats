import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import Root from './Root'
import store from '../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../actions'

class App extends Component {
  state = {
    isInitialized: false,
  }

  async componentWillMount () {
    console.log('starting fetch data...')

    await Promise.all([
      this.props.fetchUsers(), this.props.fetchComments(), this.props.fetchPosts()]
    )

    this.setState({ isInitialized: true })
  }

  render () {
    return (
      this.state.isInitialized && <Root />
    )
  }
}

const ConnectedApp = connect(null, { fetchComments, fetchPosts, fetchUsers })(App)

const ReduxWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default ReduxWrapper
