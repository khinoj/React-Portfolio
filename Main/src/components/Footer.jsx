import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="d-flex flex-column align-items-center bg-light py-3"> 
            <div className="row">
                <div className="col text-center">
                    <img src="./public/images/Github.png" alt="Github" className="mb-2" style={{width: '50px', height: '50px'}} />
                    <Link to={{ pathname: "https://github.com/khinoj" }} target="_blank" className="text-dark"><br></br>Github</Link>
                </div>
                <div className="col text-center">
                    <img src="./public/images/LinkedIn.png" alt="LinkedIn" className="mb-2" style={{width: '50px', height: '50px'}} />
                    <Link to={{ pathname: "https://www.linkedin.com/in/kris-hinojosa-8445a6a8/" }} target="_blank" className="text-dark">LinkedIn</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;