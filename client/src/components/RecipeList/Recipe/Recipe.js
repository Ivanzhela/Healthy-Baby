import { Link } from "react-router-dom";
import { Profilepic } from "../../shared/ProfilePic/ProfilePic";
import style from './Recipe.module.css';

export const Recipe = ({ paginationRecipe }) => {

    return (
        <div className={style["recipe-card"]}>

            <Link to={`/details/${paginationRecipe._id}`}>
                <div className={style.image}>
                    <img src={paginationRecipe.image} alt="recipe" />
                </div>
            </Link>

            <h5>{paginationRecipe.name}</h5>
            
            <div className={style["recipe-details"]}>
                <div className={style.status}>
                    <img src="/images/star-icon.png" alt="star" />
                    <p>{` ${paginationRecipe.stars?.length || 0}`}</p>
                </div>
                <div className={style.status}>
                    <i className="material-icons" style={{ marginTop: "2px", color: "#4d4d4f"}}>&#xe0b9;</i>
                    <p>{` ${paginationRecipe.comments?.length || 0}`}</p>
                </div>
            </div>
            
            <div className={style["user-details"]}>
                <Link to={`/profile/${paginationRecipe.owner?._id}`}>
                    <div>
                        <Profilepic />
                    </div>
                    <h3>{paginationRecipe.owner?.username}</h3>
                </Link>
            </div>
        </div>
    );
};