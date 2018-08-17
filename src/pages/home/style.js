import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    margin-left: 18px;
    margin-bottom: 18px;
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding-right: 10px;
    color: black;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic{
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const RecommentWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecomendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 280px;
    height: 100px;
    box-sizing: border-box;
`
export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    >div{
        float: left
    }
    >a{
        float: right;
    }
`

export const WriterItem = styled.div`
    margin-top: 15px;
    overflow: hidden;
    line-height: 20px;
    a{
        cursor: pointer;
        color: #333;
    }
    a.avatar {
        float: left
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-algin: center;
        }
    }
    a.follow{
        float: right;
        margin-top: 5px;
        font-size: 13px;
        color: #42c02e;
    }
    a.name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p.details  {
        margin-top: 2px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #969696;
    }
`
export const MoreWriter = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    line-height: 20px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: white;
    margin: 30px 0;
    cursor: pointer;
`
export const BackTop = styled.div`
    cursor: pointer;
    position: fixed;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 1px solid #ccc;
    right: 40px;
    bottom: 40px;
    font-size: 14px;
`
