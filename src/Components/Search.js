import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
    const [text, setText] = useState('')

    const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }
    return(
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='search a meal' className="form-imput" value={text} onChange={handleChange}></input>
                <button type="submit" className='btn btn-hipster'>Search</button>
                <button type="button" className="btn" onClick={handleRandomMeal}>Suprise Me!</button>
            </form>
        </header>
    )
}

export default Search