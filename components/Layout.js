import Navbar from './Navbar';
import Head from 'next/head'

const Layout = props => {
    return (
        <div>
            <Head>
                 <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            </Head>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;