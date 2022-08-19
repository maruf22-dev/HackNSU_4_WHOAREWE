import { MAIN_COMPONENTS } from "../../data/enums";
import QrCodeScanner from '../modular/QRCodeScanner';


export default function SelectedComponent({
    selectedComponent,
    setSelectedComponet,
    selectedBus,
    setSelectedBus
}) 
{
    if (selectedComponent === MAIN_COMPONENTS.QRCODE_SCANNER) return <QrCodeScanner />;
}