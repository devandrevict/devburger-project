import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;

`

export const LoginImage = styled.img`
    height: 100vh;
    width: 60%;
    object-fit: cover;
    
`

export const ContainerItens = styled.div`
    height: 100vh;
    width: 40%;
    background: #0E0E0E;
    box-shadow: 0px 4px 15px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 150px;

    img{
        margin-bottom: 150px;
    }

    h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-left: 175px;
    }
    
`

export const Label = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin: 5px;
`

export const Input = styled.input`
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    width: 450px;
    height: 40px;
    margin-bottom: 15px;
    border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
`



export const SignInLink = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    a{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
        cursor:pointer;
    }

`

