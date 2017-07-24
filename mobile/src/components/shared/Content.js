import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const Content = ({ children }) => {
  return (
    <ScrollView style={styles.topContainer}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#fff',
  }
})

export default Content
