import Link from 'next/link'
import Image from 'next/image'
import {slugify} from '../helpers'


export default function Post({post, itemNumber, compact}) {


    return (
        <div className={`w-full px-10 py-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-101 mt-6 ${itemNumber === 0 ? 'xl:col-span-2 xl:row-span-2' : null}`}>
            {!compact && <Image src={post.frontmatter.cover_image} alt='' height={600} width={900} className='mb-4 rounded' />}
            
            <div className='flex justify-between items-center'>
                <span className='font-light text-gray-600'>{post.frontmatter.date}</span>
                <Link href={`/${slugify(post.frontmatter.category)}`}>
                    <a className='hover:underline italic'>{post.frontmatter.category}</a>
                </Link>
            </div>

            <div className={`mt-2 ${itemNumber === 0 ? 'xl:mt-10': null}`}>
                <Link href={`/${slugify(post.frontmatter.category)}/${post.slug}`}>
                    <a className={`text-2xl text-gray-700 font-bold hover:underline ${itemNumber === 0 ? 'xl:text-5xl': null}`}>
                        {post.frontmatter.title}
                    </a>
                </Link>
                <p className={`mt-2 text-gray-600 ${itemNumber === 0 ? 'xl:text-2xl xl:mt-10': null}`}>{post.frontmatter.excerpt}</p>
            </div>


            {!compact && (
            <div className='flex justify-between items-center mt-6'>
                <Link href={`/${slugify(post.frontmatter.category)}/${post.slug}`}>
                    <a className={`text-gray-900 hover:text-blue-600 capitalize ${itemNumber === 0 ? 'xl:text-2xl xl:mt-10': null}`}>read more</a>
                </Link>
            </div>)}
            
             
        </div>
    )
}
