import React, { useEffect, useState } from 'react'
import './Search.css'
import SearchList from './SearchList/SearchList'
import SearchInput from './SearchInput/SearchInput'
import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=18include_adult=false'

const Search = () => {

    const [searchInputvalue, setSearchInputvalue] = useState("")
    const [searchList, setSearchList] = useState([])

    const handleChange = (event) => {
        setSearchInputvalue(event.target.value)
    }

    const clearSearch = () => {
        setSearchInputvalue("")
        setSearchList([])
    }

    const fetchMovieList = async () => {
        try {
            const response = await axios(API_URL, {
                params: {
                    query:searchInputvalue
                }
            })
            setSearchList(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovieList()
    }, [searchInputvalue])

    return (
        <div className='search-container'>
            <div className="heading-section">
                <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="Search" />
                <h1>Looking for a movie ?</h1>
            </div>
            <SearchInput clearSearch={clearSearch} searchInputvalue={searchInputvalue} handleChange={handleChange} />
            <SearchList searchList={searchList} />
        </div>
    )
}

export default Search;
