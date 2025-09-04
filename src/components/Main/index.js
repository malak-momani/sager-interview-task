import LeftMenuList from "../LeftMenuList";
import Header from "./Header"
import MainMap from "./Map";

const Main = () => {
    return (
        <div style={{ backgroundColor: '#111111' }}>
            <Header />
            <MainMap />
            <LeftMenuList />

        </div>

    )
}

export default Main;