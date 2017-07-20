import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Container } from 'native-base'

import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import SingleLike from './SingleLike'
import { getUsers, getUserById } from '../../selectors'

class Likes extends React.Component {
  goBack = () => this.props.navigation.goBack()

  goToProfile = userId => this.props.navigation.navigate('Profile', { userId })

  switchFollow = userId => {}

  render () {
    const { users } = this.props
    const { likes } = this.props.navigation.state.params
    // console.error(likes)

    return (
      <Container>
        <SimpleHeader left='back' title='Likes' goBack={this.goBack} />

        <Content>
          <View style={styles.container}>
            {likes.map(userId => (
              <SingleLike
                owner={getUserById(userId, users)}
                goToProfile={this.goToProfile}
                switchFollow={this.switchFollow}
                key={userId}
              />
            ))}
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 28,
  }
})

const mapStateToProps = state => ({
  users: getUsers(state),
})

export default connect(mapStateToProps)(Likes)
