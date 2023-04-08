import { useState } from "react";
import style from './RecipeSearch.module.css';

export const RecipeSearch = ( { criteriaHandler, searchParamsHandler} ) => {

    const [ searchParams, setSearchParams ] = useState("");

    const searchValueHandler = (e) => {
        e.preventDefault();

        setSearchParams(e.target.value);
    };

    return (
        <div className={style["search-bar"]}>
            <div className={style.search}>
                <form method="post" onSubmit={(e) => searchParamsHandler(e, searchParams)}>
                    <input type="text" placeholder="Search by name, ingredients or preparation match..." name="search" value={searchParams} onChange={searchValueHandler}/>
                    <button type="submit" data-testId={'search'}><i className="fa fa-search"></i></button>
                </form>
            </div>

            <div className={style["sorting-items"]}>
                <p>Sort by: </p>
                <button onClick={(e) => criteriaHandler(e, "rated")}>Rated</button>
                <button onClick={(e) => criteriaHandler(e, "commented")}>Commented</button>
            </div>
        </div>
    );
};