import * as AuthActionCreators from './auth'
import * as DeedActionCreators from './deed'
import * as UserActionCreators from './user'

export default {
  ...AuthActionCreators,
  ...DeedActionCreators,
  ...UserActionCreators
}