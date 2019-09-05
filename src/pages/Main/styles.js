import styled from 'styled-components'
import { rotate } from '../../styles/animations'

export const Container = styled.div`
    background: #F2F3F3;
    border-radius: 4px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
    padding: 30px;
    margin: 80px auto;
    max-width: 700px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    h1 {
        font-size: 24px;
        color: #333;
        display:flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        color: #333;
        flex: 1;
        border: 1px solid ${props => (props.error ? 'red' : '#EEE')};
        padding: 10px 15px;
        border-radius: 4px;
    }
`

export const Error = styled.p`
    display: block;
    color: red;
    font-size: 10pt;
    margin: 5px;
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #366ed8;
    color: #FFF;
    padding: 0px 15px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;

        svg {
            animation: ${rotate} 2s linear infinite
        }
    }
`

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    & li {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #DDD;
        }

        a {
            text-decoration: none;
            color: #366ed8;
        }
    }
`
