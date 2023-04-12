import { useState } from "react";
import style from './RecipeSearch.module.css';

export const RecipeSearch = ( { onCriteriaHandler, onSearchParamsHandler} ) => {

    const [ searchParams, setSearchParams ] = useState("");

    const searchValueHandler = (e) => {
        e.preventDefault();

        setSearchParams(e.target.value);
    };

    return (
        <div className={style["search-bar"]}>
            <div className={style.search}>
                <form method="post" onSubmit={(e) => onSearchParamsHandler(e, searchParams)}>
                    <input type="text" placeholder="Search by name, ingredients or preparation match..." name="search" value={searchParams} onChange={searchValueHandler}/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>

            <div className={style["sorting-items"]}>
                <p>Sort by: </p>
                <button onClick={(e) => onCriteriaHandler(e, "rated")}>Rated</button>
                <button onClick={(e) => onCriteriaHandler(e, "commented")}>Commented</button>
            </div>
        </div>
    );
};