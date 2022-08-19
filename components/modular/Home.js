import React, { useState } from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';


import { FaSave, FaTools } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { Prompt, Page, Input} from '../styled/feedback';
import { Text } from '../styled/Text';
import { getRandomID } from '../../utils/random';
import { addFeedbackToDatabase } from '../../utils/database';

export default function Feedback({ profile, setSelectedComponent }) {


    const [details, setDetails] = useState("");

    async function saveFeedBack()
    {
        let id = getRandomID("FEEDBACK");
        await addFeedbackToDatabase(id, profile.userID, details, Date.now());
        setDetails("");
        setSelectedComponent(null);
    }



    return (
        <Page style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Text style={{margin: "auto"}} size={3}>{`This site prototyope was developed by "WHOAREWE"`}</Text>
        </Page>
    )
}

