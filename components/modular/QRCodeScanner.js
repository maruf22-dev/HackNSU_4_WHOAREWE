import React, { useEffect, useState } from 'react';
import { QrScanner } from 'react-qrcode-scanner';

export default function QrCodeScanner({selectedBus, setSelectedBus, setSelectedComponent}) {

    const handleScan = (value) => {
        console.log(value);
        if((value) && (value.split("_")[0] === "BUS")) setSelectedComponent(null);
        setSelectedBus(value);
    }

    const handleError = (error) => {
        console.log({error})
    }

    return (
        <QrScanner
            onScan={handleScan}
            onError={handleError}
            video ={{ width: '100%',  height: '80%'}}
        />
    )
};
