import { Link } from "react-router-dom";
import styles from '../../Styles.module.css';
import NavbarLink from "../NavbarLink";

function Navbar () {
    return (
        <header className={styles.navbar}>
            <Link to="./" >
            </Link>
            <nav>
                <NavbarLink url="./">
                    Home
                </NavbarLink>
                <NavbarLink url="./Favorites">
                    Favorites
                </NavbarLink>
            </nav>
        </header>
    )
}

export default Navbar;