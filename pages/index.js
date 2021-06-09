import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import Link from 'next/link'
import Post from '../components/Post'
import {sortByDate} from '../helpers'


export default function HomePage({posts}) {


  return (
    <Layout>
      <div className=''>
        <h1 className='text-5xl border-b-4 p-5 font-bold capitalize'>latest posts</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {posts.map((post, index) => <Post key={index} post={post} itemNumber={index}/>)}
        </div>
        <Link href='/'>
          <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full capitalize'>
            all posts
          </a>
        </Link>
      </div>
    </Layout>
  )
}



export async function getStaticProps() {

  const files = fs.readdirSync(path.join('posts'))

   const posts = files.map(filename => {

     const slug = filename.replace('.md', '')

     const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

     const {data:frontmatter} = matter(markdownWithMeta)

     return {
       slug,
       frontmatter
     }

   })


  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
