import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Container } from 'native-base'

import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import { getComments } from '../../selectors'

class Comments extends React.Component {
  goBack = () => this.props.navigation.goBack()

  render () {
    // console.warn(this.props.navigation.state.params.postId)

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

const mapStateToProps = state => ({
  comments: getComments(state),
})

export default connect(mapStateToProps)(Comments)
