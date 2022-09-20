import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
    return(
        <header className="search-container">
            <form>
                <input type="text" placeholder='search a meal' className="form-imput"></input>
                <button type="submit" className='btn btn-hipster'>Search</button>
                <button type="button" className="btn">Suprise Me!</button>
            </form>
        </header>
    )
}

export default Search