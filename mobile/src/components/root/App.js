import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider, connect } from 'react-redux'


import Root from './Root'
import store from '../../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../../shared/actions'
import { hookNavigation } from './navigationHook'
import Firebase from './Firebase'

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
      dispatch(fetchPosts())
    ])

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
      this.state.isInitialized &&
        <View>
          <Root onNavigationStateChange={this.attachHook} key='root' />
          <Firebase key='firebase' />
        </View>
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
