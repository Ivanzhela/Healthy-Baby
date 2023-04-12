import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "./Recipe/Recipe";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { RecipeSearch } from "./RecipeSearch/RecipeSearch";
import { Lodaing } from '../shared/Loading/Loading';
import { getAllRecipes } from "../../services/service";
import style from './RecipeList.module.css';

export const RecipeList = ({ isProfile }) => {

    const [recipe, setRecipe] = useState(null);
    const [query, setQuery] = useState();
    const [saves, setSaves] = useState(false);

    const { userId } = useParams();

    useEffect(() => {
        let queryString = `?user=${userId}&search=${query}&saves=${saves}`;

        getAllRecipes(queryString)
            .then(result => {
                setRecipe(result)
            });

    }, [userId, isProfile, query, saves]);

    const onSearchParamsHandler = (e, value) => {
        e.preventDefault();

        setQuery(value);
    };

    const onRecipeOptionHandler = (e, value) => {
        e.preventDefault();
        setSaves(value);
    };

    const onCriteriaHandler = (e, criteria) => {
        e.preventDefault();

        let result = "";
        if (criteria === "rated") {
            result = recipe.slice().sort((a, b) => b.stars.length - a.stars.length);
        } else if (criteria === "commented") {
            result = recipe.slice().sort((a, b) => b.comments.length - a.comments.length);
        }
        setRecipe(result);
    };

    return (
        <>
            {recipe === null ?
                <Lodaing />
                :
                <>
                    {isProfile && <ProfileCard userId={userId} onRecipeOptionHandler={onRecipeOptionHandler} />}

                    <div className="container">

                        <RecipeSearch onCriteriaHandler={onCriteriaHandler} onSearchParamsHandler={onSearchParamsHandler} />

                        <div className={style["recipe-data"]}>
                            {recipe.length > 0 ?
                                recipe.map(recipe => <Recipe recipe={recipe} key={recipe._id} />) :
                                <article className={style["not-available-recipes"]}>
                                    <h1>No recipes yet.</h1>
                                </article>
                            }
                        </div>
                    </div>
                </>
            }
        </>
    );
};