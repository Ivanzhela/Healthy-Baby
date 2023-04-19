import { useEffect, useState } from 'react';
import { FilterCheckbox } from './FilterCheckbox';
import style from './RecipeSidebarCheckboxes.module.css'

export const RecipeSidebarCheckboxes = ({ recipe, onFilterCheckboxHandler }) => {

    const [filterCheckbox, setFilterCheckbox] = useState({
        age: {},
        mealTime: {},
        ingredients: {},
    });
    const [checkedFilters, setCheckedFilters] = useState({
        age: [],
        mealTime: [],
        ingredients: [],
    });

    const filters = {
        age: {
            "First Foods": 0,
            "6-9 Months": 0,
            "9-12 Months": 0,
            "12-18 Months": 0,
            "18+ Months": 0,
        },
        mealTime: {
            Breakfast: 0,
            Brunch: 0,
            Snack: 0,
            "Main Meals": 0,
            "Light Meals": 0,
            Dessert: 0

        },
        ingredients: {},
    };

    useEffect(() => {
        recipe.map((a) => {
            if (a.age || a.mealTime) {
                filters.age[a.age] += 1;
                filters.mealTime[a.mealTime] += 1;
            };
            if (a.ingredients) {
                const currIngredients = a.ingredients.split("\n");
                currIngredients.map(b => {
                    const [ingr, other] = b.split(" - ");
                    if (ingr !== 'olive oil' && ingr !== 'water') {
                        if (!filters.ingredients.hasOwnProperty(ingr)) {
                            filters.ingredients[ingr] = 1;
                        } else {
                            filters.ingredients[ingr] += 1;
                        };
                    }
                });
            };
        });
        const sortedIngredients = Object.entries(filters.ingredients)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(x => { return { [x[0]]: x[1] } });
        filters.ingredients = Object.assign({}, ...sortedIngredients);

        setFilterCheckbox(old => ({ ...old, ...filters }))
    }, [recipe]);

    useEffect(() => {
        if (Object.values(checkedFilters).some(x => x.length !== 0)) {
            const recipes = Object.entries(checkedFilters).map(a => {
    
                const result = a[1].map(i => {
                    return recipe.filter(r =>
                        r[a[0]].includes(i)
                    );
                });
                return result;
            }).flat(3);

            const newFilterRecipes = Object.values(recipes.reduce((c, e) => {
                if (!c[e.name]) c[e.name] = e;
                return c;
            }, {}));

            onFilterCheckboxHandler(newFilterRecipes);
        } else {
            onFilterCheckboxHandler(recipe);
        }
    }, [checkedFilters, recipe])

    const returnFilterCheckboxHandler = (e) => {
        const category = e.target.className;
        const content = e.target.parentElement.firstChild.textContent;

        if (e.target.checked === true) {
            const currCategory = checkedFilters[category];
            currCategory.push(content)
            setCheckedFilters(old => ({ ...old, [category]: currCategory }))
        } else {
            const currCategory = checkedFilters[category];
            const result = currCategory.filter(x => x !== content)
            setCheckedFilters(old => ({ ...old, [category]: result }))
        };
    };

    return (
        <form className={style.sidenav} method='post'>
            {Object.entries(filterCheckbox).map(filter =>
                <div className={style.filterCategory}>
                    <h3>{filter[0] === 'age' ? 'Age' : filter[0] === 'mealTime' ? 'Meal Time' : 'Ingredients'}</h3>
                    {Object.entries(filter[1])
                        .filter(a => a[1] !== 0)
                        .map((a, i) => <FilterCheckbox filter={filter[0]} checkbox={a} onFilterCheckboxHandler={returnFilterCheckboxHandler} key={i} />)}

                </div>
            )}
        </form>
    );
};