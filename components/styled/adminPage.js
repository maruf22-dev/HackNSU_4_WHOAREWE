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
    margin: 30px;
    margin-left: 5%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`

let Scrolled =  styled.div`
max-width: 100vw;
width: 100vw;
height: 88vh;
overflow-y: scroll;
`
let FeedbackContainer = styled.div`
    max-width: 80vw;
    width: 80vw;
    backgroundColor: #dbdbdb;
    margin: 10px;
    border: 1px solid black;
    padding: 10px;
`
export {
    Page,
    DeveloperPrompt,
    Input,
    Scrolled,
    FeedbackContainer
}