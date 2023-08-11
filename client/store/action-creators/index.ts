import * as AuthActionCreators from './auth'
import * as DeedActionCreators from './deed'

export default {
  ...AuthActionCreators,
  ...DeedActionCreators,
}