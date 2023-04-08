import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { getUser } from "../../services/service";
import style from './ProfileCard.module.css';

export const ProfileCard = ({ userId, onRecipeOptionHandler }) => {
    
    const [userProfile, setUserProfile] = useState({});
    const { user } = useContext(AuthContext);
    
    useEffect(() => {

        getUser(userId)
            .then(result => {
                setUserProfile(result);
            });
    }, [userId]);

    return (
        <div className={style["profile-data"]}>
            {user._id === userId &&
                <div className={style["edit-delete-btns"]}>
                    <Link to={`/profile/${userId}/edit`}>
                        <img className={style["edit-img"]} src="/images/edit-pen-icon-6.jpg" alt="edit button" />
                    </Link>
                </div>
            }
            <div className={style["profile_img"]}>
                <img src="/images/logo.png" alt="profileImage" />
            </div>

            <div className={style.personal}>
                <p>{userProfile.username}</p>
                <div className={style.data}>
                    <h3>Recipes</h3>
                    <button onClick={(e) => onRecipeOptionHandler(e, false)}>created {userProfile.createdRecipes?.length}</button>
                    {user._id === userId &&
                        <button onClick={(e) => onRecipeOptionHandler(e, true)}>saved {userProfile.savedRecipes?.length}</button>
                    }
                </div>
            </div>
        </div>
    );
};