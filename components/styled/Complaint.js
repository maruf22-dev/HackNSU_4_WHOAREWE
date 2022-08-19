import styled from 'styled-components'
import { data } from '../../data/data';

let Page = styled.div`
    background-color: ${data.styles.color.high};
    width: 100%;
    height: 80%;
`

let Prompt = styled.div`
background-color: ${data.styles.color.low};
width: 100vw;
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
    height: 15vh;
    padding: 10px;
    margin: 2.5%;
    margin-bottom: 10px;

`

export {
    Page,
    Prompt,
    Input
}