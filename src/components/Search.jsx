import React, { useState } from 'react'
import './Search.css'
import SearchList from './SearchList/SearchList'
import SearchInput from './SearchInput/SearchInput'

const Search = () => {

    const [searchInputvalue, setSearchInputvalue] = useState("")
    const [searchList, setSearchList] = useState([])

    const handleChange = (event) => {
        setSearchInputvalue(event.target.value)
    }

    return (
        <div className='search-container'>
            <div className="heading-section">
                <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="Search" />
                <h1>Looking for a movie?</h1>
            </div>
            <SearchInput searchInputvalue={searchInputvalue} handleChange={handleChange} />
            <SearchList searchList={searchList} />
        </div>
    )
}

export default Search;
