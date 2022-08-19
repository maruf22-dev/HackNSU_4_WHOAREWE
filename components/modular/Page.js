import { FullPage } from "../styled/FullPage";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

function Page({ profile,selectedComponent, setSelectedComponent, children }) {
    return (
        <FullPage>
            <TopBar profile={profile} />
            {children}
            <BottomBar selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent}/>
        </FullPage>
    )
}

export { Page };