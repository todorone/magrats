import React from 'react'

import RootApp from './src/components/App'

export default class App extends React.Component {
  state = { isReady: false }

  async componentWillMount () {
    // await Expo.Font.loadAsync({
    //   'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    // })
    // console.log('Fonts are loaded.')
    this.setState({ isReady: true })
  }

  render () {
    return this.state.isReady ? <RootApp /> : null
  }
}
