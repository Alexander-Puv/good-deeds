import { UserAction, UserActionTypes, UserState } from "@/types/user"

const initialState: UserState = {
  me: null,
  friend: null,
  userError: null
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_ME:
      return {...state, me: action.payload, userError: null}

    case UserActionTypes.EDIT_TAG:
      return {...state, me: action.payload, userError: null}

    case UserActionTypes.GET_USER_BY_TAG:
      return {...state, friend: action.payload, userError: null}

    case UserActionTypes.REMOVE_FRIEND:
      return {...state, friend: null, userError: null}

    case UserActionTypes.SET_ERROR:
      return {...state, userError: action.payload}

    default:
      return state
  }
}

export default userReducer