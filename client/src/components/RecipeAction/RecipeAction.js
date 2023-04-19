import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { Input } from "../shared/Input/Input";
import { Lodaing } from '../shared/Loading/Loading';
import { getRecipe } from '../../services/service';
import style from './RecipeAction.module.css';

export const RecipeAction = ({ isEdit }) => {

    const { recipeId } = useParams();

    let method = isEdit ? 'editRecipe' : 'createRecipe';
    const navigate = isEdit ? `/details/${recipeId}` : '/catalog';

    const { formValues, onChangeHandler, setFormValues, onSubmit, errors } = useForm({
        name: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        ingredients: '',
        preparation: '',
        image: '',
        video: '',
        age: '',
        mealTime: '',
    }, method, recipeId, navigate);

    useEffect(() => {

        if (!isEdit) {
            return;
        };
        getRecipe(recipeId)
            .then(res =>
                setFormValues(oldValues => ({
                    ...oldValues,
                    ...res
                }))
            );

    }, [recipeId, isEdit, setFormValues]);

    const currInfoPage = isEdit ? "Edit Recipe" : "Add Recipe";

    return (
        (isEdit && (Object.values(formValues).every(a => a === "")) ?
            <Lodaing />
            :
            <>
                <div className={style['form-wrapper']}>
                    <h2>{currInfoPage}</h2>

                    <form method="post" onSubmit={onSubmit}>
                        <Input
                            title={'Recipe name'}
                            type={'text'}
                            name={'name'}
                            placeholder={'Name'}
                            value={formValues.name}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <Input
                            title={'Prep time'}
                            type={'number'}
                            name={'prepTime'}
                            placeholder={'Preparation time in minutes'}
                            value={formValues.prepTime}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <Input
                            title={'Cook time'}
                            type={'number'}
                            name={'cookTime'}
                            placeholder={'Cooking time in minutes'}
                            value={formValues.cookTime}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <Input
                            title={'Servings'}
                            type={'number'}
                            name={'servings'}
                            placeholder={'3'}
                            value={formValues.servings}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <Input
                            title={'Ingredients'}
                            type={'text'}
                            name={'ingredients'}
                            placeholder={'avocado - 2\nbanana - 1...'}
                            value={formValues.ingredients}
                            handler={onChangeHandler}
                            error={errors}
                            info={'Separate every ingredients with new line'}
                        />
                        <Input
                            title={'Preparation'}
                            type={'text'}
                            name={'preparation'}
                            placeholder={'First step.\nSecond step...'}
                            value={formValues.preparation}
                            handler={onChangeHandler}
                            error={errors}
                            info={'Separate every step with new line'}
                        />
                        <Input
                            title={'Image'}
                            type={'text'}
                            name={'image'}
                            placeholder={'https://...'}
                            value={formValues.image}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <Input
                            title={'Video'}
                            type={'text'}
                            name={'video'}
                            placeholder={'https://www.youtube.com/...'}
                            value={formValues.video}
                            handler={onChangeHandler}
                            error={errors}
                        />
                        <div className={style.filters}>

                            <label for="age">Age:</label>
                            <select name="age" id="age" onChange={onChangeHandler} value={formValues.age}>
                                <option value="">Select</option>
                                <option value="First Food">First Food</option>
                                <option value="6-9 Months">6-9 Months</option>
                                <option value="9-12 Months">9-12 Months</option>
                                <option value="12-18 Months">12-18 Months</option>
                            </select>
                            <p className={style.error}>{errors.age}</p>
                            <label for="mealTime">MealTime:</label>
                            <select name="mealTime" id="mealTime" onChange={onChangeHandler} value={formValues.mealTime}>
                                <option value="">Select</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Snack">Snack</option>
                                <option value="Main Meals">Main Meals</option>
                                <option value="Light Meals">Light Meals</option>
                                <option value="Dessert">Dessert</option>
                            </select>

                            <p className={style.error}>{errors.mealTime}</p>
                        </div>
                        <button className={style["action-btn"]} type="submit" id='submit-btn'>{currInfoPage}</button>
                    </form>
                </div>
            </>
        )
    );
};