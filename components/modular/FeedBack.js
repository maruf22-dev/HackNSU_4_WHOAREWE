import React, { useState } from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';


import { FaSave, FaTools } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { Prompt, Page, Input} from '../styled/feedback';
import { Text } from '../styled/Text';
import { getRandomID } from '../../utils/random';
import { addFeedbackToDatabase } from '../../utils/database';

export default function Feedback({ profile }) {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const [details, setDetails] = useState("");

    async function saveFeedBack()
    {
        let id = getRandomID("FEEDBACK");
        await addFeedbackToDatabase(id, profile.userID, details, Date.now());
    }



    return (
        <Page>
            <Prompt>
                <Text size={2}>
                    <FaTools style={{ marginRight: "10px" }} />
                    {"Feedback for the website"}
                </Text>
            </Prompt>
            <Input value={details} type="text" placeholder="feedback" spellCheck="false" onChange={(event) => { setDetails(event.target.value) }} />

            <Text size={3}
                style={{ marginLeft: "85%" }} > 
                <TiArrowRight onClick={async () => { await saveFeedBack() }} />
            </Text>

        </Page>
    )
}

