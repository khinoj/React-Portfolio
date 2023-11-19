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
    
    return ( 
        <header style={headerStyle}>
            <h1 style={h1Style}>Kris Portfolio</h1>
            <ul>
                <li style={liStyle}>About Me</li>
                <li style={liStyle}>Projects</li>
                <li style={liStyle}>Contact</li>
                <li style={liStyle}>Resume</li>
            </ul>
        </header>
     );
}

export default Header;