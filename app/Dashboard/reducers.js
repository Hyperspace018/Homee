const intialState = {
  homeworks:[],
  isLoading: false,
  isError: false
}

const homeworkReducers = ( state = intialState,action ) => {

  switch(action.type){
    case "ALL_HOMEWORK_PENDING":
      return { ...state, isLoading: true }
    case "ALL_HOMEWORK_FULFILLED":
      return { ...state, isLoading: false, homeworks: action.payload.data }
    case "ALL_HOMEWORK_REJECTED":
      return { ...state, isLoading: false, isError: true}
    case "POST_HOMEWORK_PENDING":
      return { ...state, isLoading: true }
    case "POST_HOMEWORK_FULFILLED":
      return { ...state, isLoading: false }
    case "POST_HOMEWORK_REJECTED":
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }

}

export default homeworkReducers;