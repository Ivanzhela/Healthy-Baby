import { Link } from "react-router-dom";
import style from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={style["not-found"]}>
            <h1>404</h1>
            <h2>Oops!</h2>
            <p>We can`t seem to find the page you`re looking for.</p>
            <Link to={'/catalog'}>
                <p>Visit the all recipe page!</p>
            </Link>
        </div>
    )
}