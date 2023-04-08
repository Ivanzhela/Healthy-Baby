import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { getSeenNotifications } from '../../../services/service';
import style from './Header.module.css';

export const Header = () => {

    const { user, userNotifications, setUserNotifications } = useContext(AuthContext);

    let unSeenNotificationsCount = userNotifications.filter(a => a?.status === "unseen").length;

    const onHover = (e) => {
        e.preventDefault();

        if (unSeenNotificationsCount > 0) {
            getSeenNotifications(user._id)
                .then((n) => {
                    setUserNotifications(n);
                });
        };
    };

    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.container}>
                    <div className={style.logo}>
                        <Link to="/">
                            <img width="50px" src="/images/logo.png"
                                alt="img1" />
                        </Link>

                        <Link className={style.home} to="/">
                            <i>Healthy baby</i>
                        </Link>
                    </div>

                    <div className={style["nav-links"]}>
                        <ul>
                            <li>
                                <Link to="/catalog">
                                    <i>Recipes</i>
                                </Link>
                            </li>
                            {user.token && (
                                <>
                                    <li>
                                        <Link to="/create">
                                            <i>Add Recipe</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className={style.dropdown}>
                                            <button className={style.dropbtn}>
                                                <img src="/images/notifications-icon.png" alt="notifications"/>
                                            </button>
                                            <div className={style["dropdown-content"]} onMouseLeave={onHover}>
                                                {userNotifications.length !== 0 ?
                                                    userNotifications.map((a, i) =>
                                                        <Link to={`/details/${a.recipe}`} className={style[a.status]} key={i}>
                                                            <i>{`${a.username} ${a.action} your recipe`}</i>
                                                        </Link>)
                                                    : <p>No notifications</p>}
                                            </div>
                                        </div>
                                        {unSeenNotificationsCount !== 0 && <p className={style.notifications}>{unSeenNotificationsCount}</p>}
                                    </li>
                                </>
                            )}

                            <li>
                                <div className={style.dropdown}>
                                    <button className={style.dropbtn}>
                                        <img src="/images/user-icon.png" alt="user"/>
                                    </button>
                                    <div className={style["dropdown-content"]}>

                                        {user.token ?
                                            <>
                                                <Link to={`/profile/${user._id}`}>
                                                    <i>Profile</i>
                                                </Link>
                                                <Link to="/logout">
                                                    <i>Logout</i>
                                                </Link>
                                            </> : <>
                                                <Link to="/login">
                                                    <i>Login</i>
                                                </Link>
                                                <Link to="/register">
                                                    <i>Register</i>
                                                </Link>
                                            </>}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};