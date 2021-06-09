import Post from './Post'


export default function SearchResults({results, handleClear}) {

    if(results.length === 0) return <></>


    return (
        <div className='absolute top-20 right-0 md:right-10 z-10 border-4 border-gray-500 bg-white text-black w-6/12 rounded-2xl'>
            <div className='p-10'>
                <div className='flex justify-between items-center mx-3'>
                     <h2 className='text-3xl mb-3 capitalize'>{results.length} results</h2>
                     <span className='text-4xl font-bold cursor-pointer p-3' onClick={handleClear}>x</span>
                </div>
                {results.map((result, index) => (
                    <Post key={index} post={result} compact={true}  />
                ))}
            </div>
        </div>
    )
}
