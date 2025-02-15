import React from 'react';

const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    };

    return (
        <nav>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button onClick={ () => paginate(number) }>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Pagination;