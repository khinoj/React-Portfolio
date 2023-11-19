import { Link } from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        backgroundColor: 'grey',
        color: 'black',
        padding: 10,
        textAlign: 'center',
    };

    const h1Style = {
        fontSize: '2em',
    };

    const liStyle = {
        display: 'inline-block',
        margin: '0 10px',
    };

    const maStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        textAlign: 'center',
        backgroundColor: 'lightblue',
        flex: '1 0 auto',
    }

    return (
        <>
            <header style={headerStyle}>
                <h1 style={h1Style}>Kris Portfolio</h1>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/Project">Project</Link>
                    </li>
                </ul>
            </header>
            <footer>
            <ul>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
        </footer>
        </>

    );
}

export default Header;