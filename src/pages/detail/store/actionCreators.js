import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = (title, content) => {
    return {
        type: actionTypes.CHANGE_DETAIL,
        title,
        content
    }
}

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data
            const action = changeDetail(result.title, result.content)
            dispatch(action)
        }).catch(() => {
            console.log('error')
        })
    }
}
export const toggleTopShow = ( show ) => {
    return {
        type: actionTypes.TOOGLE_SCROLL_TOP,
        show,
    }
}