import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Profilepic } from "../../shared/ProfilePic/ProfilePic";
import style from './Comment.module.css';

export const Comment = ({ comment, recipe, onAction }) => {

    const { user } = useContext(AuthContext);
    const recipeOwner = user._id === recipe.owner._id;
    const commentOwner = comment.userId === user._id;

    return (
        <div className={style.comments}>
            <div className={style["comment-data"]}>
                <Profilepic />
                <p><b>{comment.username}</b>- {comment.comment}</p>
            </div>
            
            {user.token &&
                (commentOwner ?
                    <div className={style["edit-delete-tbns"]}>
                        <button onClick={(e) => onAction('put', comment)}>
                            <img className={style["edit-comment"]} src="/images/edit-pen-icon-6.jpg" alt="edit button" />
                        </button>
                        <button onClick={(e) => onAction('del', comment)}>
                            <img className={style["delete-comment"]} src="/images/icon-remove-22.jpg" alt="bin button" />
                        </button>
                    </div>
                    : recipeOwner ?
                        <div className={style["edit-delete-tbns"]}>
                            <button onClick={(e) => onAction('del', comment)}>
                                <img className={style["delete-comment"]} src="/images/icon-remove-22.jpg" alt="bin button" />
                            </button>
                        </div>
                    : <>
                    </>
                )}
        </div>
    );
};