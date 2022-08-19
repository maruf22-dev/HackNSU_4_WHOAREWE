import styled from 'styled-components'
import { data } from '../../data/data';

let Page = styled.div`
    background-color: ${data.styles.color.high};
    width: 100%;
    height: 100vh;
`

let DeveloperPrompt = styled.div`
background-color: ${data.styles.color.low};
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
`

let Input = styled.input`
    all: unset;
    background-color: ${data.styles.color.medium};
    outline: none;
    color: ${data.styles.color.text.low};
    font-size: x-large;
    width: 90%;
    margin-left: 5%;
    height: 15%;
    margin-top: 10%;
    text-align: center;
`

export {
    Page,
    DeveloperPrompt,
    Input
}