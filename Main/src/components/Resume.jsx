
// import resumeFile from "./public/resume/Entry_Resume.pdf"; 
// import resumeImage from "./public/images/pdf-image.png"; 

const Resume = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column mt-0" style={{backgroundColor: 'lightblue', flex: '.75 1 auto'}}>
            <a href="./public/resume/Entry_Resume.pdf" download style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="./images/pdf-image.png" alt="Resume" className="my-3" />
                <div className="btn btn-primary">Download Resume</div>
            </a>
        </main>
    );
}

export default Resume;