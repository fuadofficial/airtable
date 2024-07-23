import React from 'react'
import './SearchList.css'

const SearchList = () => {
    return (
        <div className='search-list-container'>
            <div className="search-items">
                <img width='50' height='50' style={{ objectFit: 'contain' }}
                    src="https://cdn-icons-png.flaticon.com/128/8820/8820179.png" alt="Wallpaper" />
                <p className='title'>Title</p>
            </div>
        </div>
    )
}

export default SearchList;
