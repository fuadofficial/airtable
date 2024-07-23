// import React from 'react'
// import './SearchList.css'

// const SearchList = ({ SearchList }) => {
//     return (
//         <div className='search-list-container'>
//             {SearchList.map((data) => {
//                 <div key={data.id} className="search-items">
//                     <img
//                         width='50'
//                         height='50'
//                         style={{ objectFit: 'contain' }}
//                         src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movie image" />
//                     <p className='title'>{data.title}</p>
//                 </div>
//             })}
//         </div>
//     )
// }

// export default SearchList;

import React from 'react';
import './SearchList.css';

const SearchList = ({ SearchList }) => {
    return (
        <div className='search-list-container'>
            {SearchList && SearchList.length > 0 ? (
                SearchList.map((data) => (
                    <div key={data.id} className="search-items">
                        <img
                            width='50'
                            height='50'
                            style={{ objectFit: 'contain' }}
                            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                            alt="movie image"
                        />
                        <p className='title'>{data.title}</p>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchList;
