import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { WHITE } from '../styles'

const Content = ({ children }) => {
  return (
    <ScrollView style={styles.topContainer}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: WHITE,
  }
})

export default Content
