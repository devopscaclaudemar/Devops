import styles from '../../Styles.module.css';

function Title({ children }) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}

export default Title;