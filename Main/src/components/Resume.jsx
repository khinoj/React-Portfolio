
// import resumeFile from "./public/resume/Entry_Resume.pdf"; 
// import resumeImage from "./public/images/pdf-image.png"; 

const Resume = () => {
    return (
        <main className="d-flex flex-column align-items-center">
            <a href="./public/resume/Entry_Resume.pdf" download style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="./public/images/pdf-image.png" alt="Resume" className="my-3" />
                <div className="btn btn-primary">Download Resume</div>
            </a>
        </main>
    );
}

export default Resume;