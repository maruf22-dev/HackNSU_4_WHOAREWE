import { MAIN_COMPONENTS } from "../../data/enums";
import QrCodeScanner from '../modular/QRCodeScanner';


export default function SelectedComponent({selectedComponent})
{
    if(selectedComponent === MAIN_COMPONENTS.QRCODE_SCANNER) return <QrCodeScanner />;
}