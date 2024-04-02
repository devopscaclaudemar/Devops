import { useFavoriteContext } from 'context/Favorites';
import styles from '../../Styles.module.css';
import iconFavorite from './favoritar.png'
import iconNotFavorite from './notfavorite.png'
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconNotFavorite;

    return (
                <div className={styles.containerCard}>
                    <Link className={styles.link} to={`/${id}`}>
                        <img src={cover} alt={title} className={styles.cover}></img>
                        <h2>{title}</h2>
                    </Link>


                    <img src={icon}
                        alt='Favorite place'
                        className={styles.favorite}
                        onClick={() => {
                            addFavorite({ id, title, cover })
                        }}></img>
                </div>

    )
}

export default Card;