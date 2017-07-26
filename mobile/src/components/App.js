import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import Root from './Root'
import store from '../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../actions'
import { hookNavigation } from './navigationHook'

class App extends Component {
  state = {
    isInitialized: false,
  }

  async componentWillMount () {
    console.log('environment:', process.env.NODE_ENV)

    const { dispatch } = this.props

    await Promise.all([
      dispatch(fetchUsers()),
      dispatch(fetchComments()),
      dispatch(fetchPosts())
    ])

    // dispatch(setProfileScreenToMyself())

    this.setState({ isInitialized: true })
  }

  attachHook = (prevState, nextState, action) => {
    hookNavigation({
      prevState,
      nextState,
      action,
      reduxState: this.props.reduxState,
      dispatch: this.props.dispatch,
    })
  }

  render () {
    return (
      this.state.isInitialized && <Root onNavigationStateChange={this.attachHook} />
    )
  }
}

const mapStateToProps = state => ({ reduxState: state })

const ConnectedApp = connect(mapStateToProps)(App)

const ReduxWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default ReduxWrapper
