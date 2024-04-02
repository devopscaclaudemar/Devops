import styles from '../../Styles.module.css';

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container;