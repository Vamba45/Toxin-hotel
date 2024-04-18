import { FC, useState } from 'react';
import './like.scss';

interface ILike {
    value: number
}

const Like: FC<ILike> = ({value = 0}) => {
    const [val, setVal] = useState(value);

    function likeOnClick(e: React.MouseEvent<HTMLElement>) {
        const like = (e.currentTarget as HTMLElement)
        
        like.classList.toggle('active')

        if(like.classList.contains('active'))
            setVal(val + 1)
        else {
            setVal(val - 1)
        }
    }

    return (
        <div className="like"
        onClick={likeOnClick}>
            <div className='like__icon'>
            </div>
            <div className="like__value">
                {`${val}`}
            </div>
        </div>
    )
}

export default Like;