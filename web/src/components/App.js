import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import Root from './Root'
import store from '../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../shared/actions'

class App extends Component {
  constructor () {
    super()

    this.state = {
      isInitialized: false,
    }
  }

  async componentWillMount () {
    // console.log('environment:', process.env.NODE_ENV)
    const { dispatch } = this.props

    await Promise.all([
      dispatch(fetchUsers()),
      dispatch(fetchComments()),
      dispatch(fetchPosts())
    ])

    this.setState({ isInitialized: true })
  }

  render () {
    return (
      this.state.isInitialized && <Root />
    )
  }
}

const mapStateToProps = state => ({ reduxState: state })

const ConnectedApp = connect(mapStateToProps)(App)

// ==========

const ReduxWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default ReduxWrapper
