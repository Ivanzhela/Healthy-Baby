import style from './ProfilePic.module.css';

export const Profilepic = () => {
    return (
        < div className={style["profile-pic"]} >
            <div className={style["profile_img"]}>
                <div className={style.image}>
                    <img src="/images/person.png" alt="img8" />
                </div>
            </div>
        </div >
    );
};