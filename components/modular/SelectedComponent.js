import { MAIN_COMPONENTS } from "../../data/enums";
import QrCodeScanner from '../modular/QRCodeScanner';
import Feedback from "./FeedBack";

export default function SelectedComponent({
    selectedComponent,
    setSelectedComponent,
    selectedBus,
    setSelectedBus
}) {
    if (selectedComponent === MAIN_COMPONENTS.QRCODE_SCANNER) return (
        <QrCodeScanner
            selectedBus={selectedBus} setSelectedBus={setSelectedBus} setSelectedComponent={setSelectedComponent} />)
    if (selectedComponent === MAIN_COMPONENTS.FEEDBACK) return (
        <Feedback
            setSelectedComponent={setSelectedComponent} />)
    return null;
}