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
    const sound6 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+L.TOM.wav");
    const sound7 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+M.TOM.wav") 
    const sound8 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+H.TOM.wav")
    const sound9 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Cymbal/Crash/Crash+Cymbal+1+%5BStn%5D.wav")
    const sound10 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Cymbal/Ride/Cymride1.wav")
    const sound11 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Hihat+-+Opened/hard/LINN9000+%23.7.wav")
    const sound12 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Snare+Drum/double/doublehit2.wav")
    const sound13 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/Percussion/808+Rim.wav") 
    const sound14 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/brass/trumpet/TRUMPET++++3/TRUMPET+++19.wav")
    const sound15 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Bass+Drum/Bounce/tr808kick02.wav")
    const sound16 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/Percussion/808+Rim.wav")

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
                   
                    <div className="column">
                        <div><button onClick={() =>sound6.play()} className="playSound" id="snare">High Tom-Tom</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                    <div className="column">
                        <div><button onClick={() => sound7.play()} className="playSound" id="kick">Mid Tom-Tom</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound8.play()} className="playSound" id="snare">Low Tom-Tom</button>
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
                        <div><button onClick={() => sound9.play()} className="playSound" id="kick">Crash Cymbal</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound10.play()} className="playSound" id="snare">Ride Cymbal</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                    <div className="column">
                        <div><button onClick={() => sound11.play()} className="playSound" id="kick">Hi Hat</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound12.play()} className="playSound" id="snare">Double Snare </button>
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
                {/* This is ROW 1 */}
                    <div className="column">
                        <div><button onClick={() => sound13.play()} className="playSound" id="kick">808 Rim Shot</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound14.play()} className="playSound" id="snare">Trumpet</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                    <div className="column">
                        <div><button onClick={() => sound15.play()} className="playSound" id="kick">808 Bass</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                   
                    <div className="column">
                        <div><button onClick={() =>sound16.play()} className="playSound" id="snare">Basic Snare Drum </button>
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
                        <div><button onClick={() =>sound3.play()} className="playSound" id="snare">Basic Snare Drum </button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
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
                        <div><button onClick={() =>sound3.play()} className="playSound" id="snare">Basic Snare Drum </button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label" for="inlineCheckbox1"></label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="column">
                        <div><button className="submit" id="save">Save</button>
                        </div>
                    </div>
                    </div>


                </div>
        </div>
    )
}

export default AppPage;