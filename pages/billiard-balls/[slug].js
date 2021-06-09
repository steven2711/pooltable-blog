import Layout from '../../components/Layout'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import GoBackBtn from '../../components/GoBackBtn'
import Article from '../../components/Article'

export default function PostPage({frontmatter, content}) {

    const {title} = frontmatter
    
    return (
        <Layout title={title}>
            <GoBackBtn />
            <Article frontmatter={frontmatter} content={content} />
        </Layout>
    )
}


export async function getStaticPaths() {

    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))


    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params: {slug}}) {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')


    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            content,
            slug
        }
    }
}