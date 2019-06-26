import React from "react";
import Recorderx, { ENCODE_TYPE } from "recorderx";
const createjs = window.createjs;

function Recorder(props) {

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
    rc.pause();


    // get wave
    var wave = rc.getRecord({
        encodeTo: ENCODE_TYPE.WAV,
        compressible: true
    })

    
    return (
        <div
            className="container" id="recordbtn">

            <div>
                <div><button onClick={() => rc.start()} className="recording" id="record">Record</button></div>
                <div><button onClickr={() => rc.pause()} className="recording" id="pause">Pause</button></div>

            </div>
        </div>
    )



}

export default Recorder
