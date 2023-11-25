import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <nav className="navbar navbar-expand-lg d-flex flex-column align-items-center" style={{background: 'linear-gradient(to bottom, #808080, #FFFFFF)'}}>
            <a className="navbar-brand mb-0 h1" href="#" style={{ fontSize: '2em' }}>Kris Portfolio</a>
            <div className="navbar-nav d-flex flex-row">
                <Link className="nav-link text-dark" to="/" style={{ marginRight: '20px', fontSize: '1.5em' }}>About</Link>
                <Link className="nav-link text-dark" to="/Project" style={{ marginRight: '20px', fontSize: '1.5em' }}>Project</Link>
                <Link className="nav-link text-dark" to="/Resume" style={{ fontSize: '1.5em' }}>Resume</Link>
            </div>
        </nav>
    );
}


export default Header;