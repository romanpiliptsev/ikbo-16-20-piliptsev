import {Link} from "react-router-dom";

const AppNav = () => {
    return (
        <nav className="nav">
            <Link className="nav__link" to={"/"}>Главная</Link>
            <Link className="nav__link" to={"/profile"}>Профиль</Link>
            <Link className="nav__link" to={"/chat"}>Чат</Link>
        </nav>
    )
}

export default AppNav