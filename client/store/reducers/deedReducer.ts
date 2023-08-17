import IDeed, { DeedAction, DeedActionTypes } from '@/types/deed';

const initialState: IDeed[] = []

const deedReducer = (state = initialState, action: DeedAction): IDeed[] => {
  const setDeeds = (payload: IDeed) => {
    const newState = state.filter(deed => deed.id !== payload.id)
    newState.push(payload)
    return newState
  }

  switch (action.type) {
    case DeedActionTypes.SET_DEEDS:
      return action.payload

    case DeedActionTypes.ADD_DEED:
      return setDeeds(action.payload)

    case DeedActionTypes.TOGGLE_DEED_CHECKED:
      return setDeeds(action.payload)
    
    case DeedActionTypes.SET_DEED_TEXT:
      return setDeeds(action.payload)

    case DeedActionTypes.DELETE_DEED:
      return state.filter(deed => deed.id !== action.payload)

    default:
      return state;
  }
};

export default deedReducer;
