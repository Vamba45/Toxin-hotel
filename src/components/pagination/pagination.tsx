import React, { FC } from "react"
import './pagination.scss';

const Pagination: FC = () => {
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        fetch(`https://65893844324d41715258975f.mockapi.io/react/photos/photos?page=${page}`)
        .then((res) => res.json())
        .then((json) => {
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении данных')
        }).finally()
      }, [page]);

      
    return(
        <div className="pagination">
            <ul className="pagination__list">
                {
                [... Array(5)].map((el, i) => (
                        <li onClick={() => setPage(i + 1)}
                            className={page === (i + 1) ? 'active' : ''}>
                            {i + 1}
                        </li>
                    ))
                }
            </ul>
            <div className="pagination__textbottom">1-12 из 100+ вариантов аренды</div>
        </div>
    )
}

export default Pagination;