import React, { useReducer, useMemo, useContext } from 'react'
import { customerActions } from '../actions/customerActions'
import { initialState, customerReducer } from '../reducer/customerReducer'
import Axios from 'axios'

const CustomerContext = React.createContext()

export function MainProvider(props) {
  const URL = 'http://localhost:3000'
  const [state, dispatch] = useReducer(customerReducer, initialState)

  async function createCustomer(body) {
    try {
      dispatch({ type: customerActions.CREATE_CUSTOMER, body })
      const response = await Axios.post(`${URL}/customers`, body)
      // console.log('response.data >>>', response)
      if (response.data.ok === true) {
        dispatch({ type: customerActions.CREATE_CUSTOMER_SUCCESS })
      }
    } catch (e) {
      console.error('Something bad happened :/', e)
      dispatch({ type: customerActions.CREATE_CUSTOMER_ERROR, payload: e })
    }
  }

  async function editCustomer(id, body) {
    try {
      dispatch({ type: customerActions.EDIT_CUSTOMER, payload: body })
      const response = await Axios.put(`${URL}/customers/${id}`, body)
      if (response.data.ok === true) {
        dispatch({ type: customerActions.EDIT_CUSTOMER_SUCCESS })
      }
    } catch (e) {
      console.error('Something bad happened :/', e)
      dispatch({ type: customerActions.CREATE_CUSTOMER_ERROR, payload: e })
    }
  }

  async function deleteCustomer(id) {
    try {
      dispatch({ type: customerActions.DELETE_CUSTOMER })
      const response = await Axios.delete(`${URL}/customers/${id}`)
      if (response.data.ok === true) {
        dispatch({ type: customerActions.DELETE_CUSTOMER_SUCCESS })
      }
    } catch (e) {
      console.error('Something bad happened :/', e)
      dispatch({ type: customerActions.DELETE_CUSTOMER_ERROR, payload: e })
    }
  }

  async function getAllCustomers() {
    try {
      dispatch({ type: customerActions.GET_ALL })
      const response = await Axios.get(`${URL}/customers`)
      if (response.data.ok === true) {
        dispatch({
          type: customerActions.GET_ALL_SUCCESS,
          payload: response.data.data
        })
      }
    } catch (e) {
      console.error('Something bad happened :/', e)
      dispatch({ type: customerActions.GET_ALL_ERROR, payload: e })
    }
  }

  const funcsObject = useMemo(() => {
    return {
      state,
      createCustomer,
      editCustomer,
      deleteCustomer,
      getAllCustomers
    }
  }, [state])

  return <CustomerContext.Provider value={funcsObject} {...props} />
}

export function useCustomers() {
  const ctxt = useContext(CustomerContext)
  if (!ctxt) {
    throw Error('No Provider!')
  }

  return ctxt
}
