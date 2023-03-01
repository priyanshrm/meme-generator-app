export default function Main(){
    return(
        <main className="main">
            <div className="main--top">
                <input type="text" className="firstword"></input>
                <input type="text" className="secondword"></input>
            </div>
            <div className="main--middle">
                <button className="image--generate--btn">Get a new meme image 🖼</button>
            </div>
            <div className="main--bottom">
                <img src="" className="image--generated"></img>
            </div>
        </main>
    )
}