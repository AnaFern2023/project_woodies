import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav_flex">
            <h1>🪵 WOODIES</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </div>
    );
}

export default Nav;