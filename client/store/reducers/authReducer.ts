import { AuthAction, AuthActionTypes, AuthState } from "@/types/auth"

const initialState: AuthState = {
  isAuth: false,
  isLoading: true,
  username: undefined
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_ISAUTH:
      return {...action.payload, isLoading: false}

    case AuthActionTypes.SET_ISLOADING:
      return {...state, isLoading: action.payload}

    // case AuthActionTypes.SET_USERNAME:
    //   return {...state, username: action.payload}
    // in case of changing username later

    default:
      return state
  }
}

export default authReducer