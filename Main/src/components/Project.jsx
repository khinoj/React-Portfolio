

const Project = () => {
    // The projects 
    const projects = [
        { image: './images/project-1.jpeg', text: 'Random Password Generator', link: 'https://khinoj.github.io/Random-Password-Generator/' },
        { image: './images/project-2.jpg', text: 'Day-Scheduler', link: 'https://khinoj.github.io/Day-Scheduler/' },
        { image: './images/project-3.avif', text: 'PWA-Text-Editor', link: 'https://pwa-text-editor-homework-7186e595f644.herokuapp.com/' },
        { image: './images/project-4.jpg', text: 'Employee Tracker', link: 'https://github.com/khinoj/Employee_Tracker' },
        { image: './images/coming-soon.jpg', text: 'Coming Soon!', link: '' },
        { image: './images/coming-soon.jpg', text: 'Coming Soon!', link: '' },
    ];

    // set all images
    const imgContainerStyle = {
        height: '300px',
        // overflow: 'hidden'
    };

    // images sizing
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    //Text and round cornors
    const cardBodyStyle = {
        backgroundColor: 'black',
        color: 'yellow',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    };

    //round cornors
    const cardStyle = {
        borderRadius: '15px'
    };

    // background and padding
    const containerStyle = {
        backgroundImage: 'url(./images/project-background.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: '20px', 
        paddingBottom: '20px' 
    };

    return (
        //bootstrap and html for page
        <div className="container-fluid" style={containerStyle}>
            <div className="row mb-4 justify-content-center">
                {projects.slice(0, 3).map((project, index) => (
                    <div className="col-sm-3" key={index}>
                        <div className="card" style={cardStyle}>
                            <div className="card-img-top" style={imgContainerStyle}>
                                <img src={project.image} className="img-fluid" alt={project.text} style={imgStyle} />
                            </div>
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title">{project.text}</h5>
                                <a href={project.link} className="btn btn-primary">Go to Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center">
                {projects.slice(3).map((project, index) => (
                    <div className="col-sm-3" key={index + 3}>
                        <div className="card" style={cardStyle}>
                            <div className="card-img-top" style={imgContainerStyle}>
                                <img src={project.image} className="img-fluid" alt={project.text} style={imgStyle} />
                            </div>
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title">{project.text}</h5>
                                <a href={project.link} className="btn btn-primary">Go to Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Project;