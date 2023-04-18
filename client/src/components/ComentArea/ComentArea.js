import { useState, useContext } from 'react';
import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Comment } from "../ComentArea/Coment/Comment";
import { Profilepic } from "../shared/ProfilePic/ProfilePic";
import { deleteComment, editComment } from '../../services/service';
import style from './CommentArea.module.css';

export const ComentArea = ({ recipe, onCommentHandler }) => {

    const { formValues, setFormValues, onChangeHandler, onSubmit } = useForm({ comment: '' }, `commentRecipe`, recipe._id);
    const [isAction, setIsAction] = useState(false);
    const [comment, setComment] = useState({});
    const { user } = useContext(AuthContext);

    const returnResponse = async (e) => {
        e.preventDefault();

        if (formValues === "" || formValues.comment === "") {
            return;
        };

        if (!isAction) {
            onCommentHandler(await onSubmit(e));
        } else {
            editComment(recipe._id, { comment, formValues })
                .then((res) => onCommentHandler(res))
                .then(() => setFormValues({ comment: '' }))
                .then(() => setIsAction(false));
        };
    };

    const onAction = (method, value) => {

        setIsAction(true);
        setComment(value);

        if (method === 'put') {
            setFormValues({ comment: value.comment });
        } else {
            deleteComment(recipe._id, { comment: value })
                .then((res) => onCommentHandler(res))
                .then(() => setIsAction(false));
        };

    };

    return (
        <div className={style["users-container"]}>
            <div className={style["creator-details"]}>
                <Link to={`/profile/${recipe.owner._id}`}>
                    <Profilepic image={recipe.owner.profilePic}/>
                </Link>
                <div>
                    <p>{recipe.owner.username}</p>
                </div>
            </div>

            {recipe.comments && (recipe.comments.map((c, i) => <Comment comment={c} recipe={recipe} onAction={onAction} key={i} />))}

            {user.token &&
                <div className={style["add-comments"]}>
                    <form onSubmit={(e) => { returnResponse(e) }}>
                        <textarea
                            className={style["comment-textarea"]}
                            name="comment"
                            cols="40"
                            rows="10"
                            placeholder="Add comment..."
                            value={formValues.comment}
                            onChange={onChangeHandler}>
                        </textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
            }
        </div>
    );
};