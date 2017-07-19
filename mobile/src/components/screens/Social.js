import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Header, Content, Body } from 'native-base'

import Icon from '../shared/Icon'
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
        <Header>
          <Body>
            <Text>Social</Text>
          </Body>
        </Header>

        <Content>
          <View style={styles.container}>
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
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 30,
  }
})
