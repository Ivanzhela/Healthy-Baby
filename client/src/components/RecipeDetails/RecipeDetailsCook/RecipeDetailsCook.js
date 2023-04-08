import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { CookItem } from "./CookItem/CookItem";
import { deleteRecipe } from '../../../services/service';
import style from './RecipeDetailsCook.module.css';

export const RecipeDetailsCook = ({ recipe, onSocialShareHandler }) => {
    const [socialShareState, setSocialShareState] = useState({
        save: false,
        rate: false
    });

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const saveOptions = {
        false: { action: 'saveRecipe', className: 'save', title: 'Save', image: '/images/save-icon.png' },
        true: { action: 'unSaveRecipe', className: 'unSave', title: 'Unsave', image: '/images/unsave-icon.png' }
    };

    useEffect(() => {
        const rateState = recipe.stars.some(s => s === user._id);
        const saveState = recipe.saves.some(s => s === user._id);

        setSocialShareState({
            save: saveState,
            rate: rateState
        });
    }, [recipe.stars, recipe.saves, user._id])

    const deleteHandler = (e) => {
        e.preventDefault();
        deleteRecipe(recipe._id)
            .then(() => {
                navigate('/catalog')
            });
    };

    return (
        <div className={style["details-cook"]}>
            <CookItem
                path={'prep-time'}
                title={'Prep Time'}
                infoItem={recipe.prepTime}
            />
            <CookItem
                path={'cook-time'}
                title={'Cook Time'}
                infoItem={recipe.cookTime}
            />
            <CookItem
                path={'total-time'}
                title={'Total Time'}
                infoItem={recipe.prepTime + recipe.cookTime}
            />
            <CookItem
                path={'servings'}
                title={'Servings'}
                infoItem={recipe.servings}
            />
            {user.token &&
                (user._id === recipe.owner._id ?
                    <div className={style["edit-delete-btns"]}>
                        <Link to={`/edit/${recipe._id}`}>
                            <img className={style["edit-img"]} src="/images/edit-pen-icon-6.jpg" alt="edit button" />
                        </Link>
                        <button onClick={deleteHandler}>
                            <img className={style["bin-img"]} src="/images/icon-remove-22.jpg" alt="bin button" />
                        </button>
                    </div>
                    :
                    <div className={style["social-share"]}>
                        <button className={saveOptions[socialShareState.save].className} onClick={(e) => onSocialShareHandler(e, saveOptions[socialShareState.save].action)}>
                            <img src={saveOptions[socialShareState.save].image} alt='Save' />
                            <p>{saveOptions[socialShareState.save].title}</p>
                        </button>
                        <button disabled={socialShareState.rate} onClick={(e) => onSocialShareHandler(e, 'rateRecipe')}>
                            <img src="/images/rate-icon.png" alt="Rate" style={{ width: "32px", height: "30px" }} />
                            <p style={{ marginLeft: "5px" }}>Rate</p>
                        </button>
                    </div>
                )
            }
        </div>
    );
};