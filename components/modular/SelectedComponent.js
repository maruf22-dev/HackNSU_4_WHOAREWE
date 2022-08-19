import { MAIN_COMPONENTS } from "../../data/enums";
import QrCodeScanner from '../modular/QRCodeScanner';
import Bus from "./Bus";
import Complain from "./Complain";
import Feedback from "./FeedBack";

export default function SelectedComponent({
    profile,
    selectedComponent,
    setSelectedComponent,
    selectedBus,
    setSelectedBus
}) {
    if (selectedComponent === MAIN_COMPONENTS.QRCODE_SCANNER) return (
        <QrCodeScanner
            selectedBus={selectedBus} setSelectedBus={setSelectedBus} setSelectedComponent={setSelectedComponent} />)
    if (selectedComponent === MAIN_COMPONENTS.FEEDBACK) return (
        <Feedback profile={profile}
            setSelectedComponent={setSelectedComponent} />)

    if (selectedComponent === MAIN_COMPONENTS.COMPLAIN) return (
        <Complain profile={profile} selectedBus={selectedBus}
            setSelectedComponent={setSelectedComponent} />)

    if (selectedComponent === MAIN_COMPONENTS.BUS) return (
        <Bus selectedBus={selectedBus} />)

    return null;
}