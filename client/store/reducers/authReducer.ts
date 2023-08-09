import { AuthAction, AuthActionTypes, AuthState } from "@/types/auth"

const initialState: AuthState = {
  userData: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user-data') as string)
    : null,
  isLoading: true
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {...state, userData: action.payload}
    
    case AuthActionTypes.SIGNUP:
      return {...state, userData: action.payload}

    case AuthActionTypes.SET_ISLOADING:
      return {...state, isLoading: action.payload}

    default:
      return state
  }
}

export default authReducer