import { customerActions } from '../actions/customerActions'

export const initialState = {
  fetching: false,
  array: [],
  current: {},
  error: null
}

export function customerReducer(state, action) {
  switch (action.type) {
    case customerActions.CREATE_CUSTOMER:
      return {
        ...state,
        fetching: true
      }

    case customerActions.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.CREATE_CUSTOMER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case customerActions.DELETE_CUSTOMER:
      return {
        ...state,
        fetching: true
      }

    case customerActions.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.DELETE_CUSTOMER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case customerActions.EDIT_CUSTOMER:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.EDIT_CUSTOMER_SUCCESS:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.EDIT_CUSTOMER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case customerActions.GET_ALL:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.GET_ALL_SUCCESS:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.GET_ALL_ERROR:
      return {
        ...state,
        fetching: true,
        message: action.payload
      }

    case customerActions.GET_BY_ID:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.GET_BY_ID_SUCCESS:
      return {
        ...state,
        fetching: true,
        ok: true
      }

    case customerActions.GET_BY_ID_ERROR:
      return {
        ...state,
        fetching: false,
        message: action.payload
      }
    default:
      return state
  }
}
