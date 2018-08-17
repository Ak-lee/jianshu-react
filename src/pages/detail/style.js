import styled from 'styled-components'

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
`

export const Header = styled.div`
    margin: 50px 0 20px 0;
    font-size: 34px;
    line-height: 44px;
    color: #333;
    font-weight: bold;
`

export const Content = styled.div`
    color: #2f2f2f;
    img {
        width: 100%;
    }
    p{
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
    div.part{
        margin: 25px 0; 
        overflow: hidden;
    }
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