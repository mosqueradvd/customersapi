import { authActions } from '../actions/authActions'

const initState = {
  users: []
  // users: [
  //   {
  //     email: 'marcus@gmail.com',
  //     password: 'marcus123'
  //   },
  //   {
  //     email: 'phoenix@gmail.com',
  //     password: 'phoenix123'
  //   }
  // ]
}

function reducer(state = initState, action) {
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        users: action.payload
      }
    case authActions.REGISTER_REQUEST:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default reducer
