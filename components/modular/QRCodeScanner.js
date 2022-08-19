import React, { useEffect, useState } from 'react';
import { QrScanner } from 'react-qrcode-scanner';
import { MAIN_COMPONENTS } from '../../data/enums';
import SelectedComponent from './SelectedComponent';

export default function QrCodeScanner({selectedBus, setSelectedBus, SelectedComponent, setSelectedComponent}) {

    const handleScan = (value) => {
        console.log(value);
        if((value) && (value.split("_")[0] === "BUS") && (SelectedComponent !== MAIN_COMPONENTS.BUS)) setSelectedComponent(MAIN_COMPONENTS.BUS);
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
