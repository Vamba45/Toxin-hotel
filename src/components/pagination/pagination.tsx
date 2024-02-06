import React, { FC } from "react"
import './pagination.scss';

const Pagination: FC = () => {
    const [page, setPage] = React.useState(10)
    const pageLimit = 10;
    const pageRange = 2;
    
    function pageOnClick(e: React.MouseEvent) {
        (e.target as HTMLElement).classList.toggle('active');
    }

    return(
        <div className="pagination">
            <ul className="pagination__list">
                {
                    page > 1 &&
                    <>
                        <li className="pagination__prev"></li>
                        <li className="pagination__firstpage">
                            1
                        </li>
                        <li className="pagination__dotsbefore">
                            ...
                        </li>
                    </>
                }

                {/* {   
                    page > 1 && 
                        <>
                            <li className="pagination__pagenum">
                                {
                                    page - 1
                                }
                            </li>
                            <li className="pagination__pagenum">
                                {
                                    page
                                }
                            </li>
                            <li className="pagination__pagenum">
                                {
                                    page + 1
                                }
                            </li>
                        </>
                } */}

                {
                    page < pageLimit &&
                    <>
                        <li className="pagination__dotsafter">
                            ...
                        </li>
                        <li className="pagination__lastpage">
                            {pageLimit}
                        </li>
                        <li className="pagination__next"></li>
                    </>
                }
            </ul>
            {/* <div className="pagination__textbottom">1-12 из 100+ вариантов аренды</div> */}
        </div>
    )
}

export default Pagination;