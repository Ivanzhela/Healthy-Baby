import { useEffect, useState } from 'react';
import style from './RecipePagination.module.css';

export const RecipePagination = ({ onPagination, length }) => {

    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(0);
    const allPage = Array(Math.ceil(length / 10)).fill(1);

    const returnPaginationPage = (page) => {
        onPagination(page)
    };

    useEffect(() => {
        returnPaginationPage(page);
    }, [page]);

    const onPage = (e) => {
        e.preventDefault();
        setPage(+e.target.textContent);
    };

    const onPageAction = async (e) => {

        if (e.target.textContent === `«` && pagination >= 1) {
            setPagination(page => page - 1);
            setPage(page => page - 1);
        };
        if (e.target.textContent === '»' && pagination + 3 < allPage.length) {
            setPagination(page => page + 1);
            setPage(page => page + 1);
        };
    };

    return (
        <div className={style.pagination}>
            <button onClick={onPageAction} className='page'>&laquo;</button>
            {allPage.slice(pagination, pagination + 3).map((el, i) =>
                <button key={i} className={page === pagination + i + 1 ? style['active'] : ''} onClick={onPage}>{pagination + i + 1}</button>
            )}
            <button onClick={onPageAction} className='page'>&raquo;</button>
        </div>
    );
};