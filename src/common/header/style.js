import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #f0f0f0
`
export const Logo = styled.div`
    height: 56px;
    width: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.active{
        color: #ea6f5a;
    }
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.logout{
        cursor: pointer;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    color: #999;
    svg.icon.zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        box-sizing: border-box;
        padding: 5px;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused{
            background:#777;
            color: white;
        }
    } 
`

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    padding: 0 32px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: white;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        font-size: 12px;
        margin-right: 2px;
        margin-top: 4px;
        display: block;
        float: left;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    border: 1px solid #ddd
    color: #787878;
    border-radius: 3px;
    display:block;
    float: left;
`

export const Addition = styled.div`
    position: absolute
    height: 56px;
    top: 0;
    right: 0;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149
    }
    &.writing {
        color: white;
        background: #ec6149;
    }
    &.writing>.icon{
        margin-right: 5px;
    }
`