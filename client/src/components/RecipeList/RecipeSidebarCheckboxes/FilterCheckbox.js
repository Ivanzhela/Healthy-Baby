import style from './RecipeSidebarCheckboxes.module.css';

export const FilterCheckbox = ({ filter, checkbox, onFilterCheckboxHandler }) => {

    return (
        <label className={style.container}>{checkbox[0]}
            <input type="checkbox" className={filter} onClick={onFilterCheckboxHandler}/>
            <span className={style.checkmark}></span>
            <span className={style.count}>({checkbox[1]})</span>
        </label>
    )
}