import React from 'react'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import ProfileInfo from './ProfileInfo'
import { getTabIcon } from '../navigationOptions'

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  render () {
    return (
      <Container>
        <SimpleHeader title='Profile' />

        <Content>
          <ProfileInfo />
        </Content>
      </Container>
    )
  }
}
