import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from './Icon'

export const getTabIcon = name => ({ tintColor }) => ( // eslint-disable-line react/prop-types
  <Icon style={styles.icon} name={name} outline={tintColor !== '#3478f6'} />
)

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
})
