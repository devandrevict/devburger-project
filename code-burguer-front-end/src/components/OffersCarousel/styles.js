import styled from 'styled-components'

export const Container = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{
        background-color: #A64F03;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover{
        border: 2px solid #A64F03;
        background-color: #efefef;
        color: #A64F03;
    }

    .rec.rec-arrow:disabled{
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .rec-dot_active{
        background: #A64F03;
        box-shadow: rgb(0, 1, 30) 0px 0px 1px
    }

`

export const CategoryImg = styled.img`
    
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    ;

    p{
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        color: #424242;
    }
    
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const Button = styled.button`
    margin-top:16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 21px 48px;
    gap: 10px;
    width: 200px;
    height: 30px;
    background: #A64F03;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:active {
        box-shadow: 0 5px #666;
        transform: translateY(2px);
}
`