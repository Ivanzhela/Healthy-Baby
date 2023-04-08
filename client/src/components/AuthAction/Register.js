import { useForm } from '../../hooks/useForm';
import { Link } from "react-router-dom";
import { Input } from "../shared/Input/Input";
import style from './AuthAction.module.css';

export const Register = () => {

    const { formValues, onChangeHandler, onSubmit, errors } = useForm({
        username: '',
        email: '',
        password: '',
        rePass: ''
    }, 'register', {}, '/catalog', true);

    return (
        <>
            <div className={style["form-wrapper"]}>
                <h2>Register</h2>

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
                        title={'Email'}
                        type={'email'}
                        name={'email'}
                        placeholder={'Email'}
                        value={formValues.email}
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
                    <Input
                        title={'Repeat Password'}
                        type={'password'}
                        name={'rePass'}
                        placeholder={'Repeat Password'}
                        value={formValues.rePass}
                        handler={onChangeHandler}
                        error={errors}
                    />

                    <button className={style["action-btn"]} type="submit">Register</button>
                </form>
                <br />
                <p>Have an account? <Link to="/login">LogIn</Link></p>
            </div>
        </>
    )
}