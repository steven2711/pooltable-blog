import Head from 'next/head'
import Header from './Header'
import Search from './Search'


export default function Layout({title, children, keywords, description }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.io'/>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <Header />
            <Search />
            <main className='container mx-auto my-7'>
                {children}
            </main>
        </div>
    )
}


Layout.defaultProps = {
    title: 'AnythingPoolTables.com',
    keywords: 'pool tables, cues, felt, billiards, billiard balls',
    description: 'The best resource for anything you want to know relating to the game of pool and/or pool tables.'
}
