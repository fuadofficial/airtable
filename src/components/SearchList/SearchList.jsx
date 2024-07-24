import React from 'react'
import './SearchList.css'

const SearchList = ({ firlteredList }) => {

    return (
        <div className='search-list-container'>
            {firlteredList.map((data) => {
                return (
                    <div key={data.id} className="search-items">
                        <img
                            width='50'
                            height='50'
                            style={{ objectFit: 'contain' }}
                            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movie image" />
                        <p className='title'>{data.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchList;



