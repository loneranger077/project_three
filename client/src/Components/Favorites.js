import React from "react";

const makeAudio = (link) => (new Audio(`${link}`))


const FavoritesBtn = (props) => {
    return (
        <button className="playsound" onClick={() => makeAudio(props.link).play()}>{props.name}</button>
    )
}

class Favorites extends React.Component {
    state = {
        savedInstrumentsArr: [
            {
                name: "kick",
                link: "https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav",
            },

            {
                name: "hat",
                link: "https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav",
            },

            {
                name: "snare",
                link: "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav",
            },

            {
                name: "clap",
                link: "https://project3-sounds.s3.us-east-2.amazonaws.com/Clap+Basic.wav",

            },

            {

                name: "guitar",
                link: "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+C4.wav"
            }
        ]
    }

    render() {
        let savedInstrumentsArr = this.state.savedInstrumentsArr
        return (
            <div>
                {savedInstrumentsArr.map(function (instrumentProperties) {
                    return (<FavoritesBtn 
                        key={instrumentProperties.link} 
                        link={instrumentProperties.link} 
                        name={instrumentProperties.name}/>)
                })}
            </div>
        )
    }
}

export default Favorites;