import React from "react"

export default function foo(props){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const array = props.memes.data.memes

    // console.log(meme.topText, meme.bottomText)

    function handleClick(e) {
        e.preventDefault()
        const num = Math.floor(Math.random() * array.length)
        setMeme(prevState => ({...prevState, randomImage: array[num].url}))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState, 
                [name]:value
            }
        })
    }

    return (
        <main className="meme--page"> 
            <form className="form" onSubmit={handleClick}>
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
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
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}