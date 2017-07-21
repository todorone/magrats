import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const Content = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
})

export default Content
