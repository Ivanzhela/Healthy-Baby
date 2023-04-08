import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { Input } from "../shared/Input/Input";
import { getUser } from '../../services/service';
import style from './AuthAction.module.css';

export const Edit = () => {

    const { userId } = useParams();

    const { formValues, setFormValues, onChangeHandler, onSubmit, errors } = useForm({
        username: '',
        email: '',
        password: '',
        rePass: ''

    }, 'editUser', userId, `/login`, true);

    useEffect(() => {
        getUser(userId)
            .then((res) => {
                setFormValues(old => ({
                    ...old,
                    ...res
                }))
            })
    }, [userId, setFormValues]);

    return (
        <>
            <div className={style["form-wrapper"]}>
                <h2>Edit Profile</h2>

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
                        title={'New Password'}
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                        value={formValues.password}
                        handler={onChangeHandler}
                        error={errors}
                    />
                    <Input
                        title={'Repeat new Password'}
                        type={'password'}
                        name={'rePass'}
                        placeholder={'Repeat Password'}
                        value={formValues.rePass}
                        handler={onChangeHandler}
                        error={errors}
                    />

                    <button className={style["action-btn"]} type="submit">Edit Profile</button>
                </form>
            </div>
        </>
    )
}