import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
    render() {
        const { logined } = this.props
        console.log('logined')
        console.log(logined)
        if(!logined){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input) => {this.account = input}} />
                        <Input placeholder="密码" innerRef={(input) => {this.password = input}} type="password" />
                        <Button onClick={()=>{this.props.login(this.account, this.password)}}>登录</Button>
                    </LoginBox> 
                </LoginWrapper>
            )
        }else{
            return (
                <Redirect to='/' />
            )
        }
        
    }
}

const mapState = (state) => {
    return {
        logined: state.getIn(['login','logined'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(accountElem, passwordElem) {
            dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        }
    }
}

export default connect(mapState, mapDispatch)(Login)