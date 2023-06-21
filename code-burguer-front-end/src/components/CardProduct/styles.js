import styled from "styled-components";

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const ProductName = styled.p`
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
    color: #000000;
`

export const ProductPrice = styled.p`
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-top: 80px;
    color: #000000;
`