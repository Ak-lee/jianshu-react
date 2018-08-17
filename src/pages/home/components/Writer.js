import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
    WriterWrapper,
    WriterTitle, 
    WriterItem,
    MoreWriter,
} from '../style'

class Writer extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <WriterWrapper>
                <WriterTitle>
                    <div className="title"><span>推荐作者</span></div>
                    <a className="page-change">换一批</a>
                </WriterTitle>
                <div>
                    {
                        list.map((item) => {
                            return (
                                <WriterItem key={item.get('id')}>
                                    <a className='avatar'>
                                        <img src={item.get('imgUrl')} alt=''></img>
                                    </a>
                                    <a className='follow'>+关注</a>
                                    <a className='name'>{item.get('name')}</a>
                                    <p className='details'>
                                        写了 {item.get('wordsNumber')} 字 · {item.get('followerNumber')} 喜欢
                                    </p>
                                </WriterItem>
                            )
                        })
                    }
                </div>
                <MoreWriter>查看全部 &gt; </MoreWriter>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(["home","writerList"])
    }
}

export default connect(mapState, null)(Writer) 