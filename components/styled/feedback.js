import styled from 'styled-components'
import { data } from '../../data/data';

let Page = styled.div`
    background-color: ${data.styles.color.high};
    width: 100%;
    min-width: 100vw;
    height: 80vh;
`

let Prompt = styled.div`
background-color: ${data.styles.color.low};
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
`

let Input = styled.textarea`
    all: unset;
    background-color: ${data.styles.color.medium};
    outline: none;
    color: ${data.styles.color.text.low};
    font-size: x-large;
    width: 90%;
    margin: 30px;
    margin-left: 5%;
    height: 60%;

`

export {
    Page,
    Prompt,
    Input
}