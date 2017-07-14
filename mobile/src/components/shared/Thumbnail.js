import React from 'react'
import { Image } from 'react-native'

const Thumbnail = ({ src }) => {
  return (
    <Image
      source={{ uri: src }}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
  )
}

export default Thumbnail
