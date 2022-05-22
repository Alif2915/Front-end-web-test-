const initialState = {
  popup: 'Alif',
  isAuthenticated: false,
  isLoading: false,
  user: {},
  message: ''
};

const authReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_POPUP'){
      return {
        ...state,
        popup: action.value
      }
    }  

    if (action.type === 'SET_LOGIN'){
      return {
        ...state,
        isAuthenticated: true,
        user: action.value
      }
    }

    if (action.type === 'CHANGE_LOADING'){
      return {
        ...state,
        isLoading: action.value
      }
    }

    if (action.type === 'SET_LOGOUT'){
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    }

    if (action.type === 'CHANGE_USER'){
      return {
        ...state,
        user: action.value
      }
    }
  return state;
  // switch(action.type) {
  //   case 'SET_LOGIN': 
  //     return {
  //       isAuthenticated: true,
  //       user: action.value
  //     }
  //   case 'SET_LOGOUT': 
  //     return {
  //       isAuthenticated: false,
  //       user: null
  //     }
  //   case 'CHANGE_LOADING': 
  //     return {
  //       ...state,
  //       isLoading: action.value
  //     } 
  //   case 'SET_ADMIN':
  //     return {
  //       ...state,
  //       message: action.value
  //     }
  //     default: 
  //       return state;
  // }
}

export default authReducer;