import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Container from '../shared/Container'
import SimpleHeader from '../shared/SimpleHeader'
import Icon from '../shared/Icon'
import Content from '../shared/Content'
import { getTabIcon } from '../navigationOptions'

export default class Social extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('heart'),
  }

  goToProfile = () => {
    const { navigate } = this.props.navigation
    navigate('MyProfile')
  }

  render () {
    return (
      <Container>
        <SimpleHeader />

        <Content>
          <View style={styles.topContainer}>
            <TouchableWithoutFeedback onPress={this.goToProfile}>
              <Icon name='heart' outline style={styles.buttonIcon} />
            </TouchableWithoutFeedback>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 30,
  }
})
