import React from 'react'
import { Container, Content } from 'native-base'

import SimpleHeader from '../shared/SimpleHeader'
import { getTabIcon } from '../navigationOptions'

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  render () {
    return (
      <Container>
        <SimpleHeader title='Profile'/>

        <Content />
      </Container>
    )
  }
}
