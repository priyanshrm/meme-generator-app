import React from "react"

export default function foo(props){
    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomtext: "",
        randomImage: ""
    })

    const array = props.memes.data.memes

    function handleClick(e) {
        e.preventDefault()
        const num = Math.floor(Math.random() * array.length)
        setMeme(prevState => ({...prevState, randomImage: array[num].url}))
    }

    return (
        <main className="meme--page"> 
            <form className="form" onSubmit={handleClick}>
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                />
                <button
                    className="form--btn"
                    type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="form--img--container">
                <img src={meme.randomImage} className="form--img"></img>
            </div>
        </main>
    )
}