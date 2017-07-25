import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BLACK } from '../styles'

const Container = ({ children }) => (
  <View style={styles.topContainer}>{children}</View>
)

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: BLACK,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})

export default Container
