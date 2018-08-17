import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'
import Topic  from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    handleScrollTop() {
        window.scrollTo(0,0)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo()) 
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 300) {
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Home) 