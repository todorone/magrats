import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'

import Home from '../screens/HomeScreen'
import Discover from '../screens/DiscoverScreen'
import Social from '../screens/SocialScreen'
import Camera from '../screens/CameraScreen'
import Profile from '../screens/ProfileScreen'
import Comments from '../screens/CommentsScreen'
import Post from '../screens/PostScreen'
import Likes from '../screens/LikesScreen'

const styles = {
  tabsContainer: {
    height: 65,
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
  initialRouteName: 'Home',
  tabBarComponent: TabBarBottom,
  headerMode: 'none',
  swipeEnabled: true,
  lazy: false,
  tabBarPosition: 'bottom',
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
  Post: { screen: Post }
}, {
  headerMode: 'none',
})

export default Root
