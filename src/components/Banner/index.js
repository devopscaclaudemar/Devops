import styles from '../../Styles.module.css';

function Banner ({ imagem }) {
    return (
        <div className={styles.coverBanner}
        style={{ backgroundImage: `url('/images/banner-${imagem}.jpg')` }}></div>
    )
}

export default Banner;