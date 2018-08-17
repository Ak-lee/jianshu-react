import { combineReducers } from 'redux-immutable'
import { Reducer as headerReducer } from '../common/header/store'
import { Reducer as homeReducer }  from '../pages/home/store/'
import { Reducer as detailReducer }  from '../pages/detail/store/'
import { Reducer as loginReducer }  from '../pages/login/store/'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer