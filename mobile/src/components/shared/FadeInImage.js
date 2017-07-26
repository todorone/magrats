import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class FadeInImage extends React.Component {
  static propTypes = {
    containerStyle: PropTypes.number,
  }

  startAnimation = () => this.imageRef.fadeIn(750)

  render () {
    const { containerStyle, ...props } = this.props
    return (
      <Animatable.View
        style={[containerStyle, styles.container]}
        ref={ref => this.imageRef = ref}
        useNativeDriver
      >
        <Image onLoadEnd={this.startAnimation} {...props} style={styles.image} />
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: { opacity: 0 },
  image: { flex: 1 }
})
