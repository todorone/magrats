import { setProfileScreenToMyself } from '../../actions/screens'

export function hookNavigation (action, dispatch) {
  // console.log('navigation hook', action)

  // When switching to Profile screen through main tabs, set user id to myself
  if ((action.type === 'Navigation/NAVIGATE') && (action.routeName === 'MyProfile')) {
    dispatch(setProfileScreenToMyself())
  }
}
