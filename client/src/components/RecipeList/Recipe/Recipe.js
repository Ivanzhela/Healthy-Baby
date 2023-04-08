import { Link } from "react-router-dom";
import { Profilepic } from "../../shared/ProfilePic/ProfilePic";
import style from './Recipe.module.css';

export const Recipe = ({ recipe }) => {

    return (
        <div className={style["recipe-card"]}>

            <Link to={`/details/${recipe._id}`}>
                <div className={style.image}>
                    <img src={recipe.image} alt="recipe" />
                </div>
            </Link>

            <h5>{recipe.name}</h5>
            
            <div className={style["recipe-details"]}>
                <div className={style.status}>
                    <img src="/images/star-icon.png" alt="star" />
                    <p>{` ${recipe.stars?.length || 0}`}</p>
                </div>
                <div className={style.status}>
                    <i className="material-icons" style={{ marginTop: "2px", color: "#4d4d4f"}}>&#xe0b9;</i>
                    <p>{` ${recipe.comments?.length || 0}`}</p>
                </div>
            </div>
            
            <div className={style["user-details"]}>
                <Link to={`/profile/${recipe.owner._id}`}>
                    <div>
                        <Profilepic />
                    </div>
                    <h3>{recipe.owner.username}</h3>
                </Link>
            </div>
        </div>
    );
};