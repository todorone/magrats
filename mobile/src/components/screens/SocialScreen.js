import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Expo from 'expo'

import Container from '../dumb/Container'
import Header from '../dumb/Header'
import Icon from '../dumb/Icon'
import Content from '../dumb/Content'
import { getTabIcon } from '../config/navigationUtils'
import { IOS_GOOGLE_OAUTH_ID, ANDROID_GOOGLE_OAUTH_ID } from 'react-native-dotenv'

export default class SocialScreen extends React.Component {
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
