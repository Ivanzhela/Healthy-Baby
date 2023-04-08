import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailsVideo } from "./RecipeDetailsVideo/RecipeDetailsVideo";
import { RecipeDetailsCook } from "./RecipeDetailsCook/RecipeDetailsCook";
import { ComentArea } from "../ComentArea/ComentArea";
import { Lodaing } from '../shared/Loading/Loading';
import * as service from '../../services/service';
import style from './RecipeDetails.module.css';


export const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        ingredients: '',
        preparation: '',
        stars: '',
        comments: '',
        image: '',
        video: '',
        owner: '',
        _id: ''
    },);

    const { recipeId } = useParams();

    useEffect(() => {
        service.getRecipe(recipeId)
            .then(result => {
                setRecipe(result);
            });
    }, [recipeId]);

    const onSocialShareHandler = (e, method) => {
        e.preventDefault();

        service[method](recipeId)
            .then(result => {
                setRecipe(result)
            });
    };

    const onCommentHandler = (response) => {
        setRecipe(response);
    };

    return (
        (Object.values(recipe).every(x => x === "") ?
            <Lodaing />
            :
            <>
                <div className="container">
                    <div className={style.details}>

                        <div className={style["recipe-data"]}>
                            <div className={style["recipe-name"]}>
                                <h1>{recipe.name}</h1>
                                <div className={style.stars}>
                                    <img src="/images/star-icon.png" alt="stars" />
                                    <p style={{ fontSize: "15px" }}> {recipe.stars.length || 0}</p>
                                </div>
                            </div>

                            <div className={style["details-image"]}>
                                {recipe.video ?
                                    <RecipeDetailsVideo video={recipe.video} />
                                    :
                                    <img src={recipe.image} alt="post" className={style.image} />
                                }
                            </div>

                            <RecipeDetailsCook recipe={recipe} onSocialShareHandler={onSocialShareHandler} />

                            <div className={style["details-top"]}>
                                <div className={style["details-recipe"]}>
                                    <div>
                                        <h3> Ingredients</h3>
                                        <div className={style.ingredients}>
                                            <ul>
                                                {recipe.ingredients.split(", ").map((ing, i) => <li key={i}>{ing}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Preparation</h3>
                                        <div className={style.direction}>
                                            {recipe.preparation
                                                .split("\n")
                                                .map((prep, i) =>
                                                    <div key={i}>
                                                        <span>Step{i + 1}
                                                            <p>
                                                                {prep}
                                                            </p>
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <ComentArea recipe={recipe} onCommentHandler={onCommentHandler} />
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    );
};