import { FC } from 'react';
import './comment.scss';
import Like from '../like/like';

interface IComment {
    avatar: string;
    username: string;
    lastvisit: string;
    text: string;
    likes: number
}

const Comment: FC<IComment> = ({avatar, username, lastvisit, text, likes}) => {
    return (
        <div className="comment">
            <div className="comment__section">
                <img className="comment__avatar" src={avatar}/>
                <div className="comment__text">
                    <div className="comment__username">{username}</div>
                    <div className="comment__lastvisit">{lastvisit}</div>
                </div>
            </div>
            <div className="comment__section">
                <div className="comment__likes">
                    <Like value={likes}/>
                </div>
                <p className="comment__paragraph">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Comment;