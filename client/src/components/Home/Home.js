import { Link } from "react-router-dom";
import style from './Home.module.css';

export const Home = () => {
    return (
        <div className={style.welcome}>
            <div className={style["welcome-text"]}>
                <h1>Healthy Food</h1>
                <h1 className={style["bold-welcome"]}>Healthy Baby</h1>
                <p>Your baby is eating “big kid” food now, so it`s time to start looking beyond the baby food aisle. For healthy choices see all</p>
                <Link to={'/catalog'}>
                    Recipes
                </Link>
            </div>
            <div className={style["welcome-image"]}>
                <img src="/images/home-image.png" alt="homeImg" />
            </div>
        </div>
    );
};