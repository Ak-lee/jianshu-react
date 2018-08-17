import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeLogin = () => {
    return {
        type: actionTypes.CHANGE_LOGIN,
        value: true
    }
}

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
          .then((res) => {
            const result = res.data.data
            console.log('result',result)
            if(result){
                dispatch(changeLogin())
            }else {
                alert('登录失败')
            }
          })
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
        value: false
    }
}