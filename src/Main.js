
function Main() {
    const style = {
        "zIndex": 2,
        "color": 'white',
        "a:link": 'white',
        "a:unvisited": 'white'
    }
    return (<div style={style} class="center">
        <h1>Hi there</h1>
        <h2>My name is Jake Hernandez, I'm a software engineer.</h2>
        <p>You can view my resume <a style={style} href="https://docs.google.com/document/d/e/2PACX-1vQAErMMCmruRVT9GDU3Nkc28MzZ_2i0xge4jRktkOZ9DVrwuZ--09PHVBNs6WwnzDeke0Zur60zsfyZ/pub">here.</a></p>
    </div>
    )
}

export default Main