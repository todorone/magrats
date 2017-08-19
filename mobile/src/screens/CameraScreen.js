import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { ImagePicker } from 'expo'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import Icon from '../components/Icon'
import { getTabIcon } from '../components/TabIcon'
import { LIGHTER_GRAY, LIGHTEST_GRAY } from '../styles'

export default class CameraScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('add-circle'),
  }

  async takePhoto () {
    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    console.log(pickerResult)
  }

  render () {
    return (
      <Container>
        <Header title='Camera' />

        <Content>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.takePhoto}>
              <View style={styles.hintContainer}>
                <Text style={styles.hint}>TAKE PHOTO</Text>
                <Icon name='camera' outline style={styles.buttonIcon} />
              </View>
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
  hintContainer: {
    alignItems: 'center',
  },
  hint: {
    fontSize: 26,
    fontWeight: '100',
    color: LIGHTER_GRAY,
  },
  buttonIcon: {
    fontSize: 75,
    color: LIGHTEST_GRAY,
  }
})
