import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Header, Content, Left, Right, Body } from 'native-base'

import Icon from '../shared/Icon'

export default class Social extends React.Component {
  goBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableWithoutFeedback onPress={this.goBack}>
              <Icon style={styles.buttonIcon} name='arrow-back' />
            </TouchableWithoutFeedback>
          </Left>
          <Body>
            <Text>Comments</Text>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={styles.container} />
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
    fontSize: 28,
  }
})
