import * as actionsTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionsTypes.SEARCH_FOCUS:
            // immutable 对象的set方法，会结合之前immutable对象的值
            // 和新设置的值，返回一个新的 immutable 对象
            return state.set('focused', true);
        case actionsTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionsTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            })
        case actionsTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionsTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionsTypes.CHANGE_PAGE:
            return state.set('page', action.page)
        default: 
            return state
    }
}