import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider, connect } from 'react-redux'

import Root from './Root'
import Firebase from './Firebase'
import store from '../../store/store'
import { fetchComments, fetchPosts, fetchUsers } from '../../shared/actions/data'
import { hookNavigation } from './navigationHook'
import { BLACK } from '../styles'

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
        <View style={styles.container}>
          <Root onNavigationStateChange={this.attachHook} />
          <Firebase />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: BLACK,
  }
})

const mapStateToProps = state => ({ reduxState: state })

const ConnectedApp = connect(mapStateToProps)(App)

// ==========

const ReduxWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default ReduxWrapper
