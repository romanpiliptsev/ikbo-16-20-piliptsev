import AppNav from "./AppNav";
import Image from "./Image";

const Header = () => {
    return (
        <header className="header">
            <div className="header__box container">
                <Image width={"80px"} src={"https://ionicframework.com/docs/icons/logo-react-icon.png"}/>
                <AppNav/>
            </div>
        </header>
    )
}

export default Header