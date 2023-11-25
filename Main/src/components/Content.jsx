const Content = () => {

    const imageStyle = {
        width: '250px', 
        height: '250px', 
        objectFit: 'cover',
        borderRadius: '50%', 
    };

    return (
        <main className="d-flex justify-content-center align-items-center flex-column mt-0" style={{backgroundColor: 'lightblue', flex: '.75 1 auto'}}>
            <img src="./public/images/image1.jpg" style={imageStyle} alt="Kris Image" />
            <br></br>
            <p style={{fontSize: '22px', textAlign: 'center'}}>
                Good Afternoon, My Name is Kris Hinojosa and I'm a software developer. <br></br>
                I enjoy programming because there is always a challenge. I may be new to programming but I enjoy learning something new on a daily bases.<br></br>
                I am a new father and having my son really pushed me towards developing a skill set.
            </p>
        </main>
    );
}
 
export default Content;