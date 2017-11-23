import * as types from '../constants/ActionTypes'

const DATE_CHANGE = () => ({type: types.DATE_CHANGE })

export const dateChange = () => dispatch =>  {
    dispatch(DATE_CHANGE)
}

