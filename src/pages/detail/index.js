import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content, BackTop } from './style.js'
import { actionCreators } from './store'

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
        this.bindEvents()
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
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id))
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

export default connect(mapState, mapDispatch)(Detail)