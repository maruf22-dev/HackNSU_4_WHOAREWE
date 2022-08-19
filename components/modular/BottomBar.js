import { Text } from "../styled/Text";
import { Bar } from "../styled/bar";
import { FaSadTear, FaCamera, FaComment } from 'react-icons/fa'
import { useRouter } from "next/router";
import { data } from "../../data/data";

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

export default function BottomBar({ profile }) {

    const router = useRouter();

    return (
        <Bar style={bottomBarStyle}>
            <Text size={3} style={iconstyle}>
                <FaSadTear />
            </Text>
            <Text size={3} style={iconstyle}>
                <FaCamera />
            </Text>
            <Text size={3} style={iconstyle}>
                <FaComment />
            </Text>
        </Bar>
    )
}