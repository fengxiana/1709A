const deafaultState = {
  data: []
}


export default function homeReducer (state = deafaultState, action) {
  switch (action.type) {
    case 'FETCH_HOME_ADD':
      return state
    default:
      return state
  }
}