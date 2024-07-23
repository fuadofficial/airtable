import React from 'react'
import './Search.css'
import SearchInput from './SearchInput/SearchInput'
import SearchList from './SearchList/SearchList'

const Search = () => {
    return (
        <div className='search-container'>
            <div className="heading-section">
                <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="Search" />
                <h1>Looking for a movie?</h1>
            </div>
            <SearchInput />
            {/* <SearchList /> */}
        </div>
    )
}

export default Search;
