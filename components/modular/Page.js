import { FullPage } from "../styled/FullPage";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

function Page({ profile, children }) {
    return (
        <FullPage>
            <TopBar profile={profile} />
            {children}
            <BottomBar />
        </FullPage>
    )
}

export { Page };