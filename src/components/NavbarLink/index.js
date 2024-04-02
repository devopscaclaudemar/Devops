import { Link } from "react-router-dom";
import styles from '../../Styles.module.css';


function NavbarLink ({ url, children }) {
    return (
        <Link to={url} className={styles.linkNavbar}>
            {children}
        </Link>
    )
}

export default NavbarLink;