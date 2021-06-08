import Link from 'next/link'
import Layout from '../components/Layout'


export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className='flex flex-col items-center mt-20'>
                <h1 className='text-6xl my-5'>Whoops!</h1>
                <p className='text-4xl text-gray-400 mb-5 text-center'>This page does not exist.</p>
                <Link href='/'>
                    <a>
                        Go Home
                    </a>
                </Link>
            </div>
        </Layout>
    )
}
