
const INITIAL_STATE = {
  NEW_SEARCH: '',
  UPDATE_QUERY: '',
  SEARCH_RESULTS: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case state.NEW_SEARCH:
      return {
        ...state
      }
    case state.UPDATE_QUERY:
      return {
        ...state,
        UPDATE_QUERY: action.payload
      }
    case state.SEARCH_RESULTS:
      return {
        ...state,
        SEARCH_RESULTS: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
