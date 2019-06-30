import React from "react";
import Auth from "../utils/Auth";
import { Link } from "react-router-dom";

var instruments = [
  "https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav",
  "https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav",
  "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav",
  "https://project3-sounds.s3.us-east-2.amazonaws.com/Clap+Basic.wav",
  "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+C4.wav"
];

function AppPage(props) {
  const sound1 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav"
  );
  const sound2 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav"
  );
  const sound3 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav"
  );
  const sound4 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Snare+Drum/claps/626CLAP.wav"
  );
  const sound5 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+C4.wav"
  );
  const sound6 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+L.TOM.wav"
  );
  const sound7 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+M.TOM.wav"
  );
  const sound8 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Tom+Drum/MKS+H.TOM.wav"
  );
  const sound9 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Cymbal/Crash/Crash+Cymbal+1+%5BStn%5D.wav"
  );
  const sound10 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Cymbal/Ride/Cymride1.wav"
  );
  const sound11 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Hihat+-+Opened/hard/LINN9000+%23.7.wav"
  );
  const sound12 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Snare+Drum/double/doublehit2.wav"
  );
  const sound13 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/Percussion/808+Rim.wav"
  );
  const sound14 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/brass/trumpet/TRUMPET++++3/TRUMPET+++19.wav"
  );
  const sound15 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Drums/Bass+Drum/Bounce/tr808kick02.wav"
  );
  const sound16 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/Percussion/808+Rim.wav"
  );
  const sound17 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/organ/808800008F+1/EB5F.wav"
  );
  const sound18 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/brass/section/Pop+horn+EPS/Pop+horn+EPS.wav"
  );
  const sound19 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/piano/Bright+Yamaha+Grand/P200+Piano+C7.wav"
  );
  const sound20 = new Audio(
    "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/wah/Wah+Guitars/96+Wha-4.wav"
  );

  function handleSaveSubmit(e) {
      const data = new FormData();
      console.log([...data.keys()]);
  }

  return (
    <div className="container" id="musicbtn">
       <form onSubmit={handleSaveSubmit}> 
        <div className="row">
          {/* This is ROW 1 */}
          <div className="column">
            <div>
              <button
                onClick={() => sound1.play()}
                className="playSound"
                id="kick"
              >
                Basic Kick Drum
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox1"
                id="inlineCheckbox1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound2.play()}
                className="playSound"
                id="snare"
              >
                Kick Hat Drum
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox2"
                id="inlineCheckbox2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2" />
            </div>
          </div>
          <div className="column">
            <div>
              <button
                onClick={() => sound3.play()}
                className="playSound"
                id="kick"
              >
                Basic Snare Drum
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox3"
                id="inlineCheckbox3"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound4.play()}
                className="playSound"
                id="snare"
              >
                Basic Clap
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox4"
                id="inlineCheckbox4"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox4" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div>
              <button
                onClick={() => sound5.play()}
                className="playSound"
                id="kick"
              >
                Guitar String
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox5"
                id="inlineCheckbox5"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox5" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound6.play()}
                className="playSound"
                id="snare"
              >
                High Tom-Tom
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox6"
                id="inlineCheckbox6"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox6" />
            </div>
          </div>
          <div className="column">
            <div>
              <button
                onClick={() => sound7.play()}
                className="playSound"
                id="kick"
              >
                Mid Tom-Tom
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox7"
                id="inlineCheckbox7"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox7" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound8.play()}
                className="playSound"
                id="snare"
              >
                Low Tom-Tom
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox8"
                id="inlineCheckbox8"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox8" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div>
              <button
                onClick={() => sound9.play()}
                className="playSound"
                id="kick"
              >
                Crash Cymbal
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox9"
                id="inlineCheckbox9"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox9" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound10.play()}
                className="playSound"
                id="snare"
              >
                Ride Cymbal
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox10"
                id="inlineCheckbox10"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox10" />
            </div>
          </div>
          <div className="column">
            <div>
              <button
                onClick={() => sound11.play()}
                className="playSound"
                id="kick"
              >
                Hi Hat
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox11"
                id="inlineCheckbox11"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox11" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound12.play()}
                className="playSound"
                id="snare"
              >
                Double Snare{" "}
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox12"
                id="inlineCheckbox12"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox12" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* This is ROW 1 */}
          <div className="column">
            <div>
              <button
                onClick={() => sound13.play()}
                className="playSound"
                id="kick"
              >
                808 Rim Shot
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox13"
                id="inlineCheckbox13"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox13" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound14.play()}
                className="playSound"
                id="snare"
              >
                Trumpet
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox14"
                id="inlineCheckbox14"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox14" />
            </div>
          </div>
          <div className="column">
            <div>
              <button
                onClick={() => sound15.play()}
                className="playSound"
                id="kick"
              >
                808 Bass
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox15"
                id="inlineCheckbox15"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox15" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound16.play()}
                className="playSound"
                id="snare"
              >
                Basic Kick Drum
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox16"
                id="inlineCheckbox16"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox16" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* This is ROW 1 */}
          <div className="column">
            <div>
              <button
                onClick={() => sound17.play()}
                className="playSound"
                id="kick"
              >
                Organ
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox17"
                id="inlineCheckbox17"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox17" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound18.play()}
                className="playSound"
                id="snare"
              >
                Pop Horn{" "}
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox18"
                id="inlineCheckbox18"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox18" />
            </div>
          </div>
          <div className="column">
            <div>
              <button
                onClick={() => sound19.play()}
                className="playSound"
                id="kick"
              >
                Piano
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox19"
                id="inlineCheckbox19"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox19" />
            </div>
          </div>

          <div className="column">
            <div>
              <button
                onClick={() => sound20.play()}
                className="playSound"
                id="snare"
              >
                Wah-Guitar{" "}
              </button>
            </div>
          </div>
          <div className="column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineCheckbox20"
                id="inlineCheckbox20"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox20" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div>
                <button className="login-button" id="save" type="button" onClick={handleSaveSubmit()}>
                <Link to={"/Favorites"}>Save</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppPage;
