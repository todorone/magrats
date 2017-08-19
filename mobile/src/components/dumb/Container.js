import React from 'react'
import { View, StyleSheet } from 'react-native'

const Container = ({ children }) => (
  <View style={StyleSheet.absoluteFill}>{children}</View>
)

export default Container
