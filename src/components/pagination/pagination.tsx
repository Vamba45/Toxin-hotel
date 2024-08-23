import React, { FC } from "react"
import './pagination.scss';

interface IPagination {
    pageLimit: number;
    currentPage: number;
    onClick: (page: any) => any;
}

const Pagination: FC<IPagination> = ({pageLimit = 15, currentPage = 1, onClick}) => {
    //const [page, setPage] = React.useState(currentPage);

    let page = currentPage;

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

    if(pageLimit <= 0) {
        return
    }

    return(
        <div className="pagination">
            {
                pageLimit > 0 && <>
                    <ul className="pagination__list">
                        {
                            pageLimit < 7 && <> {
                                (Array.from(Array(pageLimit).keys())).map((num, i, array) => (<li className={(page === num + 1 ? "active" : "") + " pag-btn"} onClick={() => { 
                                    onClick(num + 1)
                                }}>
                                        {num + 1}
                                    </li>
                                ))
                            }    
                            </>
                        }
                        {
                            pageLimit >= 7 && <>
                                {
                                    page <= pageRange && 
                                            range(1, pageRange + 1).map((el) => (<li className={(page === el ? "active" : "") + " pag-btn"}
                                                    onClick={() => { 
                                                        onClick(el)
                                                    }}>{el}</li>))
                                }

                                {
                                    page > pageRange && 
                                    <>
                                        <li className="pagination__prev pag-btn"
                                            onClick={() => {
                                                    onClick(page - 1);
                                                }}></li>
                                        <li className="pagination__firstpage pag-btn"
                                            onClick={() => { 
                                                onClick(1); 
                                            }}>
                                            1
                                        </li>
                                        <li className="pagination__dotsbefore pag-btn"
                                            onClick={() => { 
                                                onClick(page - 1);
                                            }}>
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
                                                    <li className={(page === num ? "active" : "") + " pag-btn"}
                                                        onClick={() => { onClick(num) }}>
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
                                        <li className="pagination__dotsafter pag-btn"
                                            onClick={() => {
                                                onClick(page + 1)
                                            }}>
                                            ...
                                        </li>
                                        <li className="pagination__lastpage pag-btn"
                                            onClick={() => {
                                                onClick(pageLimit)
                                            }}>
                                            {pageLimit}
                                        </li>
                                        <li className="pagination__next pag-btn"
                                            onClick={() => {
                                                onClick(page + 1)
                                            }}></li>
                                    </>
                                }

                                {
                                    page > (pageLimit - pageRange) && 
                                    range(pageLimit - pageRange, pageLimit).map((el) => (
                                        <li className={(page === el ? "active" : "") + " pag-btn"}
                                            onClick={() => {
                                                onClick(el)
                                            }}>{el}</li>
                                    ))
                                }
                            </>
                        }
                    </ul>
                    <div className="pagination__textbottom">1-12 из 100+ вариантов аренды</div>
                </>
            }
        </div>
    )
}

export default Pagination;