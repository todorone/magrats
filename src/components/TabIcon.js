import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from './Icon'
// eslint-disable-next-line react/prop-types
export const getTabIcon = name => ({ tintColor }) => (
  <Icon style={styles.icon} name={name} outline={tintColor !== '#3478f6'} />
)

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
})
