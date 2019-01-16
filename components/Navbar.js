import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <Link  href="/"><a className="navbar-brand">Next -js</a></Link>
                        </div>
                        <ul className="nav navbar-nav">
                        <li className="active"> 
                        <Link href="/"><a>Home</a></Link>      
                            </li>
                        <li><Link href="/about"><a>About us</a></Link></li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar;