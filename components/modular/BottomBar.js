import { Text } from "../styled/Text";
import { Bar } from "../styled/bar";
import { FaSadTear, FaCamera, FaComment } from 'react-icons/fa'
import { useRouter } from "next/router";
import { data } from "../../data/data";
import { MAIN_COMPONENTS } from "../../data/enums";

const bottomBarStyle = {
    position: "absolute", bottom: "0", justifyContent: "space-around", alignItems: "center", backgroundColor: data.styles.color.high
};
const iconstyle = {
    backgroundColor: data.styles.color.low,
    borderRadius: "50%",
    aspectRatio: "1",
    height: "80%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export default function BottomBar({ profile, selectedComponent, setSelectedComponent }) {

    const router = useRouter();


    const toggleQrCodeScanner = () => {
        if (selectedComponent === MAIN_COMPONENTS.QRCODE_SCANNER) setSelectedComponent(null);
        else setSelectedComponent(MAIN_COMPONENTS.QRCODE_SCANNER);
    }


    const toggleFeedback = () => {
        if (selectedComponent === MAIN_COMPONENTS.FEEDBACK) setSelectedComponent(null);
        else setSelectedComponent(MAIN_COMPONENTS.FEEDBACK);
    }

    const toggleComplaint = () => {
        if (selectedComponent === MAIN_COMPONENTS.COMPLAIN) setSelectedComponent(null);
        else setSelectedComponent(MAIN_COMPONENTS.COMPLAIN);
    }


    return (
        <Bar style={bottomBarStyle}>
            <Text size={3} style={iconstyle} onClick={toggleComplaint}>
                <FaSadTear />
            </Text>
            <Text size={3} style={iconstyle} onClick={toggleQrCodeScanner}>
                <FaCamera />
            </Text>
            <Text size={3} style={iconstyle} onClick={toggleFeedback}>
                <FaComment />
            </Text>
        </Bar>
    )
}