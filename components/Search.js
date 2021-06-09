import {useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import SearchResults from './SearchResults'



export default function Search() {


    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {

        const getResults = async () => {
            if(searchTerm === '') {
                setSearchResults([])
            } else {
                const res = await fetch(`/api/search?q=${searchTerm}`)
                const {results} = await res.json()
                setSearchResults(results)
            }
        }

        getResults()

    }, [searchTerm])


    const handleClear = () => {
        setSearchResults([])
        setSearchTerm('')
    }


    return (
        <>
        <div className='py-3'>
            <div className='flex items-center justify-center'>
                <div className='relative text-gray-600 ml-4'>
                    <form>
                        <input type='search' name='search' id='search' className='bg-white h-10 px-5 rounded-full text-sm focus:outline-none w-60' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search posts...' />
                        <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
                    </form>
                </div>
            </div>
            
            
        </div>
        <SearchResults results={searchResults} handleClear={handleClear} />
        </>
    )
}
