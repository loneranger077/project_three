import React from "react";
const createjs = window.createjs;


var instruments = [
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav",
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav",
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav",
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Clap+Basic.wav",
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+C4.wav"

]

function AppPage(props) {
    const sound1 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav");
    const sound2 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav");
    const sound3 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav");
    const sound4 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Snare+Drum/claps/626CLAP.wav");
    const sound5 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+C4.wav");

    return (
        <div
            className="container" id="musicbtn">

            
                <div className="row">
                {/* This is ROW 1 */}
                    <div className="column">
                        <div><button onClick={() => sound1.play()} className="playSound" id="kick">Basic Kick Drum</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound2.play()} className="playSound" id="snare">Kick Hat Drum</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                    <div className="column">
                        <div><button onClick={() => sound3.play()} className="playSound" id="kick">Basic Snare Drum</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound4.play()} className="playSound" id="snare">Basic Clap</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                </div>

                <div className="row">
              
                    <div className="column">
                        <div><button onClick={() => sound5.play()} className="playSound" id="kick">Guitar String</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                </div>   
        </div>
    )
};

export default AppPage;