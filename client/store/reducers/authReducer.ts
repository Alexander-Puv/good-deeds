import { AuthAction, AuthActionTypes, AuthState } from "@/types/auth"

const initialState: AuthState = {
  token: typeof window !== 'undefined'
  ? localStorage.getItem('token')
  : null,
  isLoading: true,
  authError: null
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return {...state, token: action.payload, authError: null}

    case AuthActionTypes.SET_ISLOADING:
      return {...state, isLoading: action.payload}

    case AuthActionTypes.SET_ERROR:
      return {...state, authError: action.payload}

    default:
      return state
  }
}

export default authReducer