import React from "react";
const createjs = window.createjs;

function AppPage (props) {
    const sound1 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav");
 const sound2 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav");
 const sound3 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav");
 const sound4 = new Audio("https://project3-sounds.s3.us-east-2.amazonaws.com/Clap+Basic.wav");
    return (
        <div
            className = "container" id="musicbtn">
        
        <div>
   <div><button onMouseOver={() => sound1.play()} className="playSound" id="kick">Basic Kick Drum</button></div>
   <div><button onMouseOver={() => sound3.play()} className="playSound" id="snare">Basic Snare Drum</button></div> 
   <div><button onMouseOver={() => sound4.play()} className="playSound" id="clap">Basic Clap Drum</button></div>
   <div><button onMouseOver={() => sound2.play()} className="playSound" id="hat">Basic Hat Drum</button></div>
 </div>
 </div>
    )
}

export default AppPage;