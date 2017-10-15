import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import Icon from './Icon'
import PostsList from './PostsList'
import PostsGrid from './PostsGrid'
import { BLUE, LIGHTEST_GRAY } from '../styles'

export default class ProfileFeeds extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }

  state = {
    currentTab: 'list',
  }

  activateListTab = () => this.setState({ currentTab: 'list' })
  activateGridTab = () => this.setState({ currentTab: 'grid' })

  render() {
    const { posts, users, comments, onItemClick } = this.props
    const { currentTab } = this.state

    return (
      <View>
        <View style={styles.tabsContainer}>
          <TouchableWithoutFeedback onPress={this.activateListTab}>
            <View style={styles.tab}>
              <Icon
                name="list"
                style={[styles.listIcon, currentTab === 'list' && styles.activeIcon]}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.activateGridTab}>
            <View style={styles.tab}>
              <Icon
                name="apps"
                outline
                style={[styles.gridIcon, currentTab === 'grid' && styles.activeIcon]}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {currentTab === 'grid' ? (
          <PostsGrid posts={posts} onItemClick={onItemClick} />
        ) : (
          <PostsList posts={posts} users={users} comments={comments} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  tabsContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: LIGHTEST_GRAY,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LIGHTEST_GRAY,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    fontSize: 38,
  },
  gridIcon: {
    fontSize: 31,
  },
  activeIcon: {
    color: BLUE,
  },
})
