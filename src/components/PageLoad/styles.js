import styled from 'styled-components'
import { rotate } from '../../styles/animations'

export const Loading = styled.div`
    font-size: 48px;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: #FFF;
        animation: ${rotate} 2s linear infinite
    }
`
