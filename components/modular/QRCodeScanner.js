import React, { useEffect, useState } from 'react';
import { QrScanner } from 'react-qrcode-scanner';

export default function QrCodeScanner({setSelectedComponent}) {
    const [data, setData] = useState(null);

    const handleScan = (value) => {
        setData(value)
    }

    const handleError = (error) => {
        console.log({error})
    }

    useEffect(()=>{
        if(data)
        {
            if(data.split("_")[0] === "BUS") setSelectedComponent(null);
        }

    }, [data]);


    return (
        <QrScanner
            onScan={handleScan}
            onError={handleError}
            video ={{ width: '100%',  height: '80%'}}
        />
    )
};
