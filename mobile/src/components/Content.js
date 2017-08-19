import React from 'react'
import { ScrollView } from 'react-native'

// TODO: Replace with optimized FlatList
const Content = ({ children }) => {
  return (
    <ScrollView>
      {children}
    </ScrollView>
  )
}

export default Content
