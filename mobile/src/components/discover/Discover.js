import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'native-base'

import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import DiscoverGrid from './DiscoverGrid'
import { getTabIcon } from '../navigationOptions'
import { getPosts } from '../../selectors'

class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('search'),
  }

  render () {
    const { feed } = this.props

    return (
      <Container>
        <SimpleHeader title='Discover' />

        <Content>
          <DiscoverGrid
            feed={Object.values(feed)}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  feed: getPosts(state),
})

export default connect(mapStateToProps)(Discover)
