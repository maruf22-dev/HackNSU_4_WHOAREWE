import styled from 'styled-components'
import { data } from '../../data/data';

let Bar = styled.div`
    background-color: ${data.styles.color.high};
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
`

let Profile = styled.div`
width: max-content;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`

let ProfilePicture = styled.img`
    height: 90%;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 5px;
`

let LogOutButton = styled.div`
width: max-content;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
gap: 5px;
`;

export { Bar, Profile, ProfilePicture, LogOutButton };