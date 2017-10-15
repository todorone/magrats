import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WHITE } from '../styles'

const Container = ({ children }) => <View style={styles.container}>{children}</View>

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: WHITE,
  },
})

export default Container
