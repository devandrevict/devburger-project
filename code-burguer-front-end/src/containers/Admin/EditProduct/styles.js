import styled from 'styled-components'
import { Button } from '../../../components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background: black;
        box-shadow: 9px 10px 45px 5px rgba(0,0,0,0.96);
        opacity: 0.8;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const Label = styled.p`
    font-size: 15px;
    color: white;
    margin-bottom: 10px;

`

export const Input = styled.input`
    height: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: none;
    width: 100%;
    min-width: 280px;
    padding-left: 10px;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 20px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dotted #ffffff;
    border-radius: 5px;
    padding: 10px;
    color: white;
    justify-content: center;
    gap: 5px;

    input {
        opacity: 0;
        width: 1px;
    
    }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;

    input {
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
`