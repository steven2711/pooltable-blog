export default function Hamburger({open}) {
    return (
        <div className='w-7 h-full flex flex-col justify-center items-center'>
            <div className='bg-white w-full h-1 mb-1.5 rounded'></div>
            <div className='bg-white w-full h-1 mb-1.5 rounded'></div>
            <div className='bg-white w-full h-1 rounded'></div>
        </div>
    )
}
