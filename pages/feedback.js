import React, { useEffect, useState } from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';


import { addAuth0UserToDatabase, addBusToDatabase, getFeedback, getUserWithAuth0ID } from '../utils/database';
import { Page } from '../components/modular/Page';
import { DeveloperPrompt, FeedbackContainer, Input, Page as AdminPage, Scrolled } from '../components/styled/adminPage';
import SelectedComponent from '../components/modular/SelectedComponent';
import { MAIN_COMPONENTS } from '../data/enums';
import { FaSave, FaTools } from 'react-icons/fa';
import { Text } from '../components/styled/Text';
import { TiArrowRight } from 'react-icons/ti';
import { getRandomID } from '../utils/random';


export default function FeedBack({ profile }) {

    const [feedbacks, setFeedbacks] = useState([]);

    async function fetchFeedback() {
        let { data } = await getFeedback();
        setFeedbacks(data);
    }


    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <AdminPage>
            <DeveloperPrompt>
                <Text size={2}>
                    <FaTools style={{ marginRight: "10px" }} />
                    {"All feedbacks of the website is"}
                </Text>
            </DeveloperPrompt>

            <Scrolled>
                {
                    feedbacks.map((current, index) => {
                        return (
                            <FeedbackContainer key={index}>
                                <Text size={2}>
                                    Feedback details : {current.details}
                                </Text>
                                <Text>
                                    Feedback by : {current.userID}
                                </Text>
                            </FeedbackContainer>
                        )
                    })
                }

            </Scrolled>
        </AdminPage>
    )
}



export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ({ req, res }) => {

        const auth0User = getSession(req, res);
        // not authenticated by auth0
        if (!auth0User || !auth0User?.user) return { notFound: true };

        // authenticated by auth0
        let auth0ID = auth0User?.user?.sub;
        const { data: user, error: retrieveError } = await getUserWithAuth0ID(auth0ID);


        // error with supabase query
        if (retrieveError || !user) return { notFound: true };

        // admin check
        if ((user.length !== 0) && (user[0].name !== 'marufbinsalim22')) return { notFound: true };


        // found auth0 user in supabase users table
        if (user.length !== 0) return { props: { profile: user[0] } }

        // auth0 user is not in supabase users table (insert user)
        if (user.length === 0) {
            let { data: newUser, error: insertError } = await addAuth0UserToDatabase(auth0User.user);

            // error inserting user to supabase
            if (insertError)
                return { notFound: true };

            return { props: { profile: newUser } }
        }


        return { notFound: true };

    },
});