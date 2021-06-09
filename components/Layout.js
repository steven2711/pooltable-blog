import Head from 'next/head'
import Header from './Header'


export default function Layout({title, children, keywords, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.io'/>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <Header />
            <main className='container mx-auto md:mt-32 mt-24'>
                {children}
            </main>
        </>
    )
}


Layout.defaultProps = {
    title: 'AnythingPoolTables.com',
    keywords: 'pool tables, cues, felt, billiards, billiard balls',
    description: 'The best resource for anything you want to know relating to the game of billiards and/or pool tables.'
}
