import React from "react";
import Recorderx, { ENCODE_TYPE } from "recorderx";


function Recorder(props) {
    console.log("Hello World!!")

    const rc = new Recorderx();

    // start recorderx
    rc.start()
        .then(() => {
            console.log("start recording");
        })
        .catch(error => {
            console.log("recording failed.", error);
        });


    // pause recorderx
    rc.pause()
    
    // get wave
    var wave = rc.getRecord({
        encodeTo: ENCODE_TYPE.WAV,
    })

    
    return (
        <div
            className="container" id="recordbtn">

            <div>
                <div><button onClick={() => rc.start()} className="recording" id="record">Record</button></div>
                <div><button onClick={() => rc.pause()} className="recording" id="record">pause</button></div>

            </div>
        </div>
    )



};

export default Recorder
