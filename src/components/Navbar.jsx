import myLogo from '../assets/troll-face.png'

export default function Main(){
    return(
        <nav className="navbar">
            <div className="navbar--left">
                <img src={myLogo} alt="logo"></img>
                <h2>Meme Generator</h2>
            </div>
            <div className="navbar--right">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}