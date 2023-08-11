import IDeed, { DeedAction, DeedActionTypes } from '@/types/deed';

const initialState: IDeed[] = [
  { id: '1', checked: false, text: 'Deed 1' },
  { id: '2', checked: true, text: 'Deed 2' },
  { id: '3', checked: false, text: 'Deed 3' },
];

const deedReducer = (state = initialState, action: DeedAction): IDeed[] => {
  switch (action.type) {
    case DeedActionTypes.TOGGLE_DEED_CHECKED:
      return state.map(deed => {
        if (deed.id === action.payload) {
          return {...deed, checked: !deed.checked}
        }
        return deed
      })
    
    case DeedActionTypes.SET_DEED_TEXT:
      return state.map(deed => {
        if (deed.id === action.payload.id) {
          return {...deed, text: deed.text}
        }
        return deed
      })

    default:
      return state;
  }
};

export default deedReducer;
