import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from './screens/Home'
import Discover from './discover/Discover'
import Social from './screens/Social'
import Camera from './screens/Camera'
import Profile from './profile/Profile'
import Comments from './comments/Comments'
import Likes from './likes/Likes'

const styles = {
  tabsContainer: {
    height: 70,
    paddingLeft: 15,
    paddingRight: 15,

    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    backgroundColor: '#fcfdfe'
  },
}

const Tabs = TabNavigator({
  Home: { screen: Home },
  Discover: { screen: Discover },
  Camera: { screen: Camera },
  Social: { screen: Social },
  MyProfile: { screen: Profile },
}, {
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
    style: styles.tabsContainer,
  }
})

const Root = StackNavigator({
  MainScreen: { screen: Tabs },
  Comments: { screen: Comments },
  Likes: { screen: Likes },
  Profile: { screen: Profile },
}, {
  headerMode: 'none',
})

export default Root
