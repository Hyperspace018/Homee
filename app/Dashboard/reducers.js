const intialState = {
  homeworksOngoing:[],
  homeworksDone:[],
  homeworksPend:[],
  isLoading: false,
  isError: false
}

const homeworkReducers = ( state = intialState,action ) => {

  switch(action.type){
    case "ALL_HOMEWORK_ONGOING_PENDING":
      return { ...state, isLoading: true }
    case "ALL_HOMEWORK_ONGOING_FULFILLED":
      return { ...state, isLoading: false, homeworksOngoing: action.payload.data }
    case "ALL_HOMEWORK_ONGOING_REJECTED":
      return { ...state, isLoading: false, isError: true}
    case "ALL_HOMEWORK_DONE_PENDING":
      return { ...state, isLoading: true }
    case "ALL_HOMEWORK_DONE_FULFILLED":
      return { ...state, isLoading: false, homeworksDone: action.payload.data }
    case "ALL_HOMEWORK_DONE_REJECTED":
      return { ...state, isLoading: false, isError: true}
    case "ALL_HOMEWORK_PEND_PENDING":
      return { ...state, isLoading: true }
    case "ALL_HOMEWORK_PEND_FULFILLED":
      return { ...state, isLoading: false, homeworksPend: action.payload.data }
    case "ALL_HOMEWORK_PEND_REJECTED":
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