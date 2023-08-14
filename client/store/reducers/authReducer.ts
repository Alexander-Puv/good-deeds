import { AuthAction, AuthActionTypes, AuthState } from "@/types/auth"

const initialState: AuthState = {
  user: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user-data') as string)
    : null,
  isLoading: true
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      // some logic to add new user
      localStorage.setItem('user-data', JSON.stringify(action.payload))
      return {...state, user: action.payload}
    
    case AuthActionTypes.SIGNUP:
      // some logic to add new user
      localStorage.setItem('user-data', JSON.stringify(action.payload))
      return {...state, user: action.payload}

    case AuthActionTypes.SET_ISLOADING:
      return {...state, isLoading: action.payload}

    default:
      return state
  }
}

export default authReducer