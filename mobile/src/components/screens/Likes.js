import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'

import SimpleHeader from '../shared/SimpleHeader'

export default class Likes extends React.Component {
  goBack = () => this.props.navigation.goBack()

  render () {
    return (
      <Container>
        <SimpleHeader left='back' title='Likes' goBack={this.goBack} />

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
