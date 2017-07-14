import React from 'react'
import { Content } from 'native-base'
import SinglePost from '../post/SinglePost'

export default class PostsList extends React.Component {

  render () {
    return (
      <Content>
        {[0, 1].map((post, i) => (
          <SinglePost
            key={i}
            name='kobybryant'
            thumbnailUrl='https://0.s3.envato.com/files/97977535/128/5_resize.png'
            photoUrl='https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/17/gettyimages-540885498_0.jpg'
            likesNumber={103}
          />
        ))}
      </Content>
    )
  }
}
