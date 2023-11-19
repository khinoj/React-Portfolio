const Content = () => {

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
        <main style={maStyle}>
            <p>Good Afternoon, My Name is Kris Hinojosa and I'm a software developer. <br></br>I enjoy programming because there is always a challenge. I may be new to programming but I enjoy learning something new on a daily bases.<br></br>I am a new father and having my son really pushed me towards developing a skill set.</p>
        </main>
     );
}
 
export default Content;