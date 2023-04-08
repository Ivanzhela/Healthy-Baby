import style from './CookItem.module.css';

export const CookItem = ({ path, title, infoItem }) => {
    return (
        <div className={style["cook-item"]}>
            <div>
                <img src={`/images/${path}-icon.png`} alt="prepIcon" />
            </div>
            <span>{title}:</span>
            <p>{infoItem} {path === 'servings' ? '' : 'min'}</p>
        </div>
    );
};