import Link from 'next/link'
import Search from './Search'
import {FaSearch} from 'react-icons/fa'



export default function MobileOpen() {
    return (
            <div className='flex flex-col justify-start items-center p-5 text-center'>
                <nav className='flex flex-col'>
                    <Link href='/pool-cues'>
                        <a className='mb-8 text-xl cursor-pointer uppercase hover:text-indigo-300'>
                            pool cues
                        </a>
                    </Link>
                    <Link href='/pool-tables'>
                        <a className='mb-8 text-xl cursor-pointer uppercase hover:text-indigo-300'>
                            pool tables
                        </a>
                    </Link>
                    <Link href='/billiard-balls'>
                        <a className='mb-8 text-xl cursor-pointer uppercase hover:text-indigo-300'>
                            billiard balls
                        </a>
                    </Link>
                    <Link href='/how-to-play'>
                        <a className='mb-8 text-xl cursor-pointer uppercase hover:text-indigo-300'>
                            how to play
                        </a>
                    </Link>
                    <Link href='/accessories'>
                        <a className='mb-8 text-xl cursor-pointer uppercase hover:text-indigo-300'>
                            accessories
                        </a>
                    </Link>
                    <Link href='/search'>
                        <FaSearch className='my-8 text-2xl cursor-pointer uppercase hover:text-indigo-300 mx-auto' />
                    </Link>
                </nav>
            </div>
        
    )
}
