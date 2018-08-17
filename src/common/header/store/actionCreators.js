import * as actionsTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => {
    return {
        type: actionsTypes.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil( data.length / 10 )
    }
}

export const searchFocus = () => {
    return {
        type: actionsTypes.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: actionsTypes.SEARCH_BLUR
    }
}

export const mouseEnter = () => {
    return {
        type:  actionsTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionsTypes.MOUSE_LEAVE
    }
}

export const changePage = (page) => {
    return {
        type: actionsTypes.CHANGE_PAGE,
        page
    }
}

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}