const Content = () => {

    const imageStyle = {
        width: '250px', 
        height: '250px', 
        objectFit: 'cover',
        borderRadius: '50%', 
    };

    return (
        <main className="d-flex justify-content-center align-items-center flex-column mt-0" style={{backgroundColor: 'lightblue', flex: '.75 1 auto'}}>
            <img src="./images/image1.jpg" style={imageStyle} alt="Kris Image" />
            <br></br>
            <p style={{fontSize: '22px', textAlign: 'center'}}>
                My Name is Kris Hinojosa and I'm a software developer. <br></br>
                I enjoy programming because there is always a challenge. <br></br>
                I am a new father and having my son really pushed me towards developing a skill set that would allow me to support my little man.
            </p>
        </main>
    );
}
 
export default Content;