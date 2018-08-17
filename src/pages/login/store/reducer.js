import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
   logined: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('logined', action.value)
        case actionTypes.LOGOUT:
            return state.set('logined', action.value)
        default: 
            return state
    }
}