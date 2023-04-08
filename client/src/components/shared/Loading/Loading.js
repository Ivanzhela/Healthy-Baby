import style from './Loading.module.css';

export const Lodaing = () => {
    return (
        <div className={style.loading}>
            <img src="/images/loading-spinner.gif" alt="" />
        </div>
    );
};