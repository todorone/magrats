import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'

import SimpleHeader from '../shared/SimpleHeader'

export default class Comments extends React.Component {
  goBack = () => this.props.navigation.goBack()

  render () {
    console.warn(this.props.navigation.state.params.postId)

    return (
      <Container>
        <SimpleHeader left='back' title='Comments' goBack={this.goBack} />

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
