intialState = {
  isLoading: false,
  isLoginSucess: false,
  isError: false
}

const loginReducers = ( state=intialState, action ) => {
  switch(action.type){
    case "POST_LOGIN_PENDING":
      return { ...state, isLoading: true }
    case "POST_LOGIN_FULFILLED":
      return { ...state, isLoading: false, isLoginSucess: true}
    case "POST_LOGIN_REJECTED":
      return { ...state, isLoading: false, isLoginSucess: true, isError: true}
    default:
      return state
  }
}

export default loginReducers;