intialState = {
  isLoading: false,
  isRegisterSucess: false,
  isError: false
}

const registerReducers = ( state=intialState, action ) => {
  switch(action.type){
    case "POST_REGISTER_PENDING":
      return { ...state, isLoading: true }
    case "POST_REGISTER_FULFILLED":
      return { ...state, isLoading: false, isRegisterSucess: true}
    case "POST_REGISTER_REJECTED":
      return { ...state, isLoading: false, isRegisterSucess: true, isError: true}
    default:
      return state
  }
}

export default registerReducers;