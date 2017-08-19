import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Expo from 'expo'

import Container from '../shared/Container'
import Header from '../shared/Header'
import Icon from '../shared/Icon'
import Content from '../shared/Content'
import { getTabIcon } from '../root/navigationUtils'
import { IOS_GOOGLE_OAUTH_ID, ANDROID_GOOGLE_OAUTH_ID } from 'react-native-dotenv'

export default class Social extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('heart'),
  }

  async logIn () {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: ANDROID_GOOGLE_OAUTH_ID,
        iosClientId: IOS_GOOGLE_OAUTH_ID,
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        console.warn('Sign in success', result.accessToken)
      } else {
        console.warn('Sign cancelled')
      }
    } catch (e) {
      console.warn('Sign error')
    }
  }

  render () {
    return (
      <Container>
        <Header title='Social' />

        <Content>
          <View style={styles.topContainer}>
            <TouchableWithoutFeedback onPress={this.logIn}>
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
