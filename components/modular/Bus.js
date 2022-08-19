import React from "react"
import { useState, useEffect } from "react"
import { getBus } from "../../utils/database"
import { Text } from "../styled/Text";

export default function Bus({ selectedBus })
{
    const [bus, setBus] = useState(null);
    async function fetchBus() {
        let { data } = await getBus(selectedBus);
        console.log(data);
        setBus(data);
    }
    useEffect(() => {
        fetchBus();
    }, [selectedBus]);

    return (
        <Text>
            {JSON.stringify(bus)}
        </Text>
    )
}