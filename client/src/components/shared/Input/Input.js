import style from './Input.module.css';

export const Input = ({
    title,
    type,
    name,
    placeholder,
    value,
    handler,
    error,
    info
}) => {

    return (
        <div>
            <h4>{title}</h4>
            {info &&
                <span>* {info}</span>
            }
            <div>
                {info ?
                    <textarea type={type} name={name} placeholder={placeholder} value={value} onChange={handler}></textarea>
                    :
                    <input type={type} name={name} placeholder={placeholder} value={value} onChange={handler} />
                }

                {error[name] &&
                    <p className={style.error}>{error[name]}</p>
                }

            </div>
        </div>
    );
};