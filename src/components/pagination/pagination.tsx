import React, { FC } from "react"
import './pagination.scss';

interface IPagination {
    pageLimit: number
}

const Pagination: FC<IPagination> = ({pageLimit = 15}) => {
    const [page, setPage] = React.useState(1);

    const pageLim = pageLimit;
    const pageRange = 2;

    let centerNums = new Array;

    const from = page - Math.floor(pageRange / 2);
    const to = page + Math.ceil(pageRange / 2);

    for(let i = from; i <= to; i++) {
        centerNums.push(i);
    }

    function range(start: number, end: number) {
        let result = [];

        for (let i = start; i <= end; i++) {
            result.push(i);
        }

        return result;
    }

    function pageIncrement() {
        if(page + 1 <= pageLimit) {
            setPage(page + 1)
        }
    }

    function pageDecriment() {
        if(page - 1 >= 1) {
            setPage(page - 1)
        }
    }

    return(
        <div className="pagination">
            <ul className="pagination__list">
                {
                    page <= pageRange && 
                            range(1, pageRange + 1).map((el) => (
                                <li className={page === el ? "active" : ""}
                                    onClick={() => setPage(el)}>{el}</li>
                            ))
                }

                {
                    page > pageRange && 
                    <>
                        <li className="pagination__prev"
                            onClick={pageDecriment}></li>
                        <li className="pagination__firstpage"
                            onClick={() => setPage(1)}>
                            1
                        </li>
                        <li className="pagination__dotsbefore   "
                            onClick={pageDecriment}>
                            ...
                        </li>   
                    </>
                }

                <div className="pagination__centerNums">
                    {
                        page > pageRange && page <= (pageLimit - pageRange) &&
                        <>
                            {
                                centerNums.map((num, index) => (
                                    <li className={page === num ? "active" : ""}
                                        onClick={() => setPage(num)}>
                                        {num}
                                    </li>
                                ))
                            }
                        </>
                    }
                </div>

                {
                    page < (pageLimit - pageRange + 1) && 
                    <>
                        <li className="pagination__dotsafter"
                            onClick={pageIncrement}>
                            ...
                        </li>
                        <li className="pagination__lastpage"
                            onClick={() => setPage(pageLimit)}>
                            {pageLimit}
                        </li>
                        <li className="pagination__next"
                            onClick={pageIncrement}></li>
                    </>
                }

                {
                    page > (pageLimit - pageRange) && 
                    range(pageLimit - pageRange, pageLimit).map((el) => (
                        <li className={page === el ? "active" : ""}
                            onClick={() => setPage(el)}>{el}</li>
                    ))
                }
            </ul>
            <div className="pagination__textbottom">1-12 из 100+ вариантов аренды</div>
        </div>
    )
}

export default Pagination;