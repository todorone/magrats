import React from 'react'
import { View, StyleSheet } from 'react-native'

const Container = ({ children }) => (
  <View style={styles.topContainer}>{children}</View>
)

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})

export default Container
