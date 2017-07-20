import React from 'react'
import PropTypes from 'prop-types'
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

Content.propTypes = {
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
}

export default Content
