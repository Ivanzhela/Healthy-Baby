import style from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <span className={style["footer-section"]}>
                © 2023 Healthy Baby
            </span>
        </div>
    );
};