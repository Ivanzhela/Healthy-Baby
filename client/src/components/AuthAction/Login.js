import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { Input } from "../shared/Input/Input";
import style from './AuthAction.module.css';

export const Login = () => {

    const { formValues, onChangeHandler, onSubmit, errors } = useForm({
        username: '',
        password: '',
    }, 'login', {}, '/catalog', true);

    return (
        <>
            <div className={style["form-wrapper"]}>
                <h2>Login</h2>

                <form method="post" onSubmit={onSubmit}>
                    <Input
                        title={'Username'}
                        type={'text'}
                        name={'username'}
                        placeholder={'Username'}
                        value={formValues.username}
                        handler={onChangeHandler}
                        error={errors}
                    />

                    <Input
                        title={'Password'}
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                        value={formValues.password}
                        handler={onChangeHandler}
                        error={errors}
                    />

                    <button className={style["action-btn"]} type="submit">Login</button>
                </form>
                <br />
                <p>Have an account? <Link to="/register">Register</Link></p>
            </div>
        </>
    )
}