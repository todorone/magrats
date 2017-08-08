import React from 'react'
import { View, StyleSheet } from 'react-native'

const Container = ({ children }) => (
  <View style={StyleSheet.absoluteFillObject}>{children}</View>
)

export default Container
