import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { logoImage } from '../styles'

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 36,
    width: 220,
    resizeMode: 'contain',
  },
})
