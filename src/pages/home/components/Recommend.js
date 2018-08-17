import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommentWrapper, RecomendItem } from '../style'

class Recommend extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <RecommentWrapper>
                {
                    list.map((item) => {
                        return (
                            <RecomendItem imgUrl= {item.get('imgUrl')} key = {item.get('id')} />
                        )
                    })
                }
            </RecommentWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home','recomendList'])
    }
}

export default  connect(mapState, null)(Recommend) 