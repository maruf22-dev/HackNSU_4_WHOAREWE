import React, { useState } from 'react';
import { QrScanner } from 'react-qrcode-scanner';

export default function QrCodeScanner() {
    const [data, setData] = useState('empty');

    const onResult = (result, error) => {
        if (result)
            setData(result?.text);
    }


    const handleScan = (value) => {
        console.log({value})
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
