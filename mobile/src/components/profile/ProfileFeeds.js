import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { LIGHTEST_GRAY } from '../styles'
import Icon from '../shared/Icon'

export default class ProfileFeeds extends React.Component {
  static propTypes = {

  }

  static state = {
    currentTab: 'list',
  }

  render () {
    return (
      <View>
        <View style={styles.tabsContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.tab}>
              <Icon name='list' style={styles.tabIcon} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.tab}>
              <Icon name='apps' style={styles.tabIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  tabsContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    borderTopWidth: 1,
    borderTopColor: LIGHTEST_GRAY,
    borderBottomWidth: 1,
    borderBottomColor: LIGHTEST_GRAY,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 36,
  }
})
