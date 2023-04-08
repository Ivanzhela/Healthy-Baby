import style from './Background.module.css';

export const Background = () => {
    return (
        <div className={style["background-image"]}>
            <img src="/images/catalog-bg.png" alt="background" />
        </div>
    );
};