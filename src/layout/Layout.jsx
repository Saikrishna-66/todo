import { Link, Outlet } from "react-router"
import './layout.css';


function Layout() {

    return (
        <div className="layout">
            <header className="layout-header">
                <Link className="brand" to={'/home'}>Todo</Link>
                <nav className="nav-links">
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                </nav>
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
