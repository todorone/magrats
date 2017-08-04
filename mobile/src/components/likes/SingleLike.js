import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import Button from '../shared/Button'
import Thumbnail from '../shared/Thumbnail'
import { truncateString } from '../../utils/utils'
import { GRAY, WHITE } from '../styles'

export default class SingleLike extends React.Component {
  static propTypes = {
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbUrl: PropTypes.string.isRequired,
    }).isRequired,
    isMeFollowing: PropTypes.bool.isRequired,
    goToProfile: PropTypes.func.isRequired,
    switchFollow: PropTypes.func.isRequired,
  }

  switchFollow = () => this.props.switchFollow(this.props.owner.id)

  goToProfile = () => this.props.goToProfile(this.props.owner.id)

  render () {
    const { owner, isMeFollowing } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.goToProfile}>
        <View style={styles.topContainer}>
          <Thumbnail src={owner.thumbUrl} />
          <View style={styles.infoContainer}>
            <Text style={styles.id}>{owner.id}</Text>
            <Text style={styles.name}>{truncateString(owner.description, 25)}</Text>
          </View>

          <View style={styles.buttonContainer}>
            {isMeFollowing
              ? <Button theme='primary' onPress={this.switchFollow}>Following</Button>
              : <Button onPress={this.switchFollow}>Follow</Button>
            }
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: WHITE,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  id: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: GRAY,
  },
  buttonContainer: {
    width: 105,
  },
})
