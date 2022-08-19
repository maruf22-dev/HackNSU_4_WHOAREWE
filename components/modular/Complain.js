import React, { useState } from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';


import { FaSave, FaTools } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { Prompt, Page, Input} from '../styled/Complaint';
import { Text } from '../styled/Text';
import { getRandomID } from '../../utils/random';
import { addComplaintToDatabase, addFeedbackToDatabase } from '../../utils/database';

export default function Complain({ profile, selectedBus, setSelectedComponent }) {

    console.log("ashe");
    
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    async function saveComplaint()
    {
        let id = getRandomID("Complaint");
        console.log(profile);
        await addComplaintToDatabase(id, selectedBus, title, details, Date.now(), profile.userID);
        setTitle("");
        setDetails("");
        setSelectedComponent(null);
    }



    return (
        <Page>
            <Prompt>
                <Text size={2}>
                    <FaTools style={{ marginRight: "10px" }} />
                    {"Complain against the scanned bus"}
                </Text>
            </Prompt>
            <Input value={title} type="text" placeholder="title" spellCheck="false" onChange={(event) => { setTitle(event.target.value) }} />
            <Input value={details} type="text" placeholder="feedback" spellCheck="false" onChange={(event) => { setDetails(event.target.value) }} />

            <Text size={3}
                style={{ marginLeft: "85%" }} > 
                <TiArrowRight onClick={async () => { await saveComplaint() }} />
            </Text>

        </Page>
    )
}

