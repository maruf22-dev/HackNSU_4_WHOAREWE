import React from "react"
import { useState, useEffect } from "react"
import { FaBus, FaTools } from "react-icons/fa";
import { routes } from "../../data/bus-routes";
import { getBus } from "../../utils/database"
import { FeedbackContainer, Scrolled } from "../styled/adminPage";
import { Page, Prompt, Input } from "../styled/feedback";
import { Text } from "../styled/Text";



function getRoutes(busName)
{
    if(!busName) return "";
    for(let i= 0 ; i <  routes.length; i++)
    {
        if(routes[i].busName?.toLowerCase() === busName?.toLowerCase()) return routes[i].route;
    }
    return "";
}

export default function Bus({ selectedBus }) {
    const [bus, setBus] = useState([]);
    async function fetchBus() {
        let { data } = await getBus(selectedBus);
        console.log(data);
        setBus(data);
    }
    useEffect(() => {
        fetchBus();
    }, []);

    return (
        <Page>
            <Prompt>
                <Text size={2}>
                    <FaBus style={{ marginRight: "10px" }} />
                    {"Information about the scanned bus"}
                </Text>
            </Prompt>
            <Scrolled style={{ height: "70vh", backgroundColor: "#1b1b1b" }}>
                {
                    bus.map((current, index) => {
                        return (

                            <FeedbackContainer key={index}>
                                <Text>Scanned Bus name : {current.busName}</Text>
                                <Text>License No : {current.busLicense}</Text>
                                <Text> Route for the selected bus : {getRoutes(current.busName)}</Text>
                            </FeedbackContainer>
                        )
                    })}
            </Scrolled>
        </Page>
    )
}