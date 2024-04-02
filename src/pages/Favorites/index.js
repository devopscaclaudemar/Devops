import Title from 'components/Title';
import styles from '../../Styles.module.css';
import Banner from 'components/Banner';
import Card from 'components/Cards';
import { useFavoriteContext } from 'context/Favorites';



function Favorites() {
    const { favorite } = useFavoriteContext();
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>My Favorites</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;