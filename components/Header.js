import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='bg-gray-900 text-gray-100 shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link href='/'>
                    <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                        {/* <Image src='' width={} height={} alt='logo'/> */}
                        <span className='ml-3 text-xl'>anything pool tables</span>
                    </a>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
                    <Link href='/pool-cues'>
                        <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                            pool cues
                        </a>
                    </Link>
                    <Link href='/pool-tables'>
                        <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                            pool tables
                        </a>
                    </Link>
                    <Link href='/billiard-balls'>
                        <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                            billiard balls
                        </a>
                    </Link>
                    <Link href='/how-to-play'>
                        <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                            how to play
                        </a>
                    </Link>
                    <Link href='/accessories'>
                        <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                            accessories
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
