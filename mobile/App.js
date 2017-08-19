import React from 'react'

import RootApp from './src/components/config/App'

export default class App extends React.Component {
  state = { isReady: false }

  async componentWillMount () {
    // console.log('Critical async actions before app start, for example font loading')
    this.setState({ isReady: true })
  }

  render () {
    return this.state.isReady ? <RootApp /> : null
  }
}
