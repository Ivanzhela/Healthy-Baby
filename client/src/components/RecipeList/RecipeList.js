import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Recipe } from "./Recipe/Recipe";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { RecipeSearch } from "./RecipeSearch/RecipeSearch";
import { Lodaing } from '../shared/Loading/Loading';
import { RecipePagination } from "./RecipePagination/RecipePagination";
import { getAllRecipes } from "../../services/service";
import style from './RecipeList.module.css';
import { RecipeSidebarCheckboxes } from "./RecipeSidebarCheckboxes/RecipeSidebarCheckboxes";

export const RecipeList = ({ isProfile }) => {

    const [recipe, setRecipe] = useState(null);
    const [filterRecipes, setFilterRecipes] = useState([]);
    const [query, setQuery] = useState();
    const [saves, setSaves] = useState(false);
    const [paginationRecipe, setPaginationRecipe] = useState();

    const { userId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        let queryString = `?user=${userId}&search=${query}&saves=${saves}`;

        getAllRecipes(queryString)
            .then(result => {
                setRecipe(result)
            })
            .then(() => {
                if (userId !== user._id) {
                    setSaves(false);
                };
            });

    }, [userId, isProfile, query, saves]);

    useEffect(() => {

        const recipeOnPage = filterRecipes.length === 0 ? recipe?.slice(0, 10) : filterRecipes?.slice(0, 10);
        setPaginationRecipe(recipeOnPage);
    }, [recipe, filterRecipes]);

    const searchParamsHandler = (e, value) => {
        e.preventDefault();
        setQuery(value);
    };

    const criteriaHandler = (e, criteria) => {
        e.preventDefault();

        let result = "";
        if (criteria === "rated") {
            result = recipe.slice().sort((a, b) => b.stars.length - a.stars.length);
        } else if (criteria === "commented") {
            result = recipe.slice().sort((a, b) => b.comments.length - a.comments.length);
        };
        setRecipe(result);
    };

    const onRecipeOptionHandler = (e, value) => {
        e.preventDefault();
        setSaves(value);
    };

    const onPagination = (page) => {
        const index = (page - 1) * 10;
        const recipes = filterRecipes.length === 0 ? recipe : filterRecipes;
        setPaginationRecipe(recipes.slice(index, index + 10));
    }

    const onFilterCheckboxHandler = (newValue) => {
        setFilterRecipes(newValue);
    };

    return (
        <>
            {paginationRecipe === undefined ?
                <Lodaing />
                :
                <>
                    <RecipeSidebarCheckboxes recipe={recipe} filterRecipes={filterRecipes} onFilterCheckboxHandler={onFilterCheckboxHandler} />

                    <div className="container">

                        <RecipeSearch criteriaHandler={criteriaHandler} searchParamsHandler={searchParamsHandler} />

                        <div className={style["recipe-data"]}>
                            {paginationRecipe.length > 0 ?
                                paginationRecipe.map(recipe => <Recipe paginationRecipe={recipe} key={recipe._id} />) :
                                <article className={style["not-available-recipes"]}>
                                    <h1>No recipes yet.</h1>
                                </article>
                            }
                        </div>

                        <RecipePagination onPagination={onPagination} length={filterRecipes.length > 0 ? filterRecipes.length : recipe.length} />
                    </div>

                    {isProfile && <ProfileCard userId={userId} onRecipeOptionHandler={onRecipeOptionHandler} />}
                </>
            }
        </>
    );
};