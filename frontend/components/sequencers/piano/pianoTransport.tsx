import React, { useEffect, useState } from "react";
import * as Tone from "tone";

function PianoTransport({ notes }) {
  const [loaded, setLoaded] = useState(false);
  const [celloLoaded, setCelloLoaded] = useState(false);
  // const synth = new Tone.Synth().toDestination();
  // const polySynth = new Tone.PolySynth().toDestination();
  // new Tone.Buffer("path/to/sound.[mp3|ogg|wav]")
  // useEffect(() => {

  const cello = new Tone.Sampler({
    urls: {
      E3: "E3.[mp3|ogg]",
      E4: "E4.[mp3|ogg]",
      F2: "F2.[mp3|ogg]",
      F3: "F3.[mp3|ogg]",
      F4: "F4.[mp3|ogg]",
      "F#3": "Fs3.[mp3|ogg]",
      "F#4": "Fs4.[mp3|ogg]",
      G2: "G2.[mp3|ogg]",
      G3: "G3.[mp3|ogg]",
      G4: "G4.[mp3|ogg]",
      "G#2": "Gs2.[mp3|ogg]",
      "G#3": "Gs3.[mp3|ogg]",
      "G#4": "Gs4.[mp3|ogg]",
      A2: "A2.[mp3|ogg]",
      A3: "A3.[mp3|ogg]",
      A4: "A4.[mp3|ogg]",
      "A#2": "As2.[mp3|ogg]",
      "A#3": "As3.[mp3|ogg]",
      B2: "B2.[mp3|ogg]",
      B3: "B3.[mp3|ogg]",
      B4: "B4.[mp3|ogg]",
      C2: "C2.[mp3|ogg]",
      C3: "C3.[mp3|ogg]",
      C4: "C4.[mp3|ogg]",
      C5: "C5.[mp3|ogg]",
      "C#3": "Cs3.[mp3|ogg]",
      "C#4": "Cs4.[mp3|ogg]",
      D2: "D2.[mp3|ogg]",
      D3: "D3.[mp3|ogg]",
      D4: "D4.[mp3|ogg]",
      "D#2": "Ds2.[mp3|ogg]",
      "D#3": "Ds3.[mp3|ogg]",
      "D#4": "Ds4.[mp3|ogg]",
      E2: "E2.[mp3|ogg]",
    },
    baseUrl: "/samples/cello/",
    onload: () => {
      setCelloLoaded(true);
      cello.toDestination();
    },
  });

  const piano = new Tone.Sampler({
    urls: {
      A7: "A7.[mp3|ogg]",
      A1: "A1.[mp3|ogg]",
      A2: "A2.[mp3|ogg]",
      A3: "A3.[mp3|ogg]",
      A4: "A4.[mp3|ogg]",
      A5: "A5.[mp3|ogg]",
      A6: "A6.[mp3|ogg]",
      "A#7": "As7.[mp3|ogg]",
      "A#1": "As1.[mp3|ogg]",
      "A#2": "As2.[mp3|ogg]",
      "A#3": "As3.[mp3|ogg]",
      "A#4": "As4.[mp3|ogg]",
      "A#5": "As5.[mp3|ogg]",
      "A#6": "As6.[mp3|ogg]",
      B7: "B7.[mp3|ogg]",
      B1: "B1.[mp3|ogg]",
      B2: "B2.[mp3|ogg]",
      B3: "B3.[mp3|ogg]",
      B4: "B4.[mp3|ogg]",
      B5: "B5.[mp3|ogg]",
      B6: "B6.[mp3|ogg]",
      C7: "C7.[mp3|ogg]",
      C1: "C1.[mp3|ogg]",
      C2: "C2.[mp3|ogg]",
      C3: "C3.[mp3|ogg]",
      C4: "C4.[mp3|ogg]",
      C5: "C5.[mp3|ogg]",
      C6: "C6.[mp3|ogg]",
      "C#7": "Cs7.[mp3|ogg]",
      "C#1": "Cs1.[mp3|ogg]",
      "C#2": "Cs2.[mp3|ogg]",
      "C#3": "Cs3.[mp3|ogg]",
      "C#4": "Cs4.[mp3|ogg]",
      "C#5": "Cs5.[mp3|ogg]",
      "C#6": "Cs6.[mp3|ogg]",
      D7: "D7.[mp3|ogg]",
      D1: "D1.[mp3|ogg]",
      D2: "D2.[mp3|ogg]",
      D3: "D3.[mp3|ogg]",
      D4: "D4.[mp3|ogg]",
      D5: "D5.[mp3|ogg]",
      D6: "D6.[mp3|ogg]",
      "D#7": "Ds7.[mp3|ogg]",
      "D#1": "Ds1.[mp3|ogg]",
      "D#2": "Ds2.[mp3|ogg]",
      "D#3": "Ds3.[mp3|ogg]",
      "D#4": "Ds4.[mp3|ogg]",
      "D#5": "Ds5.[mp3|ogg]",
      "D#6": "Ds6.[mp3|ogg]",
      E7: "E7.[mp3|ogg]",
      E1: "E1.[mp3|ogg]",
      E2: "E2.[mp3|ogg]",
      E3: "E3.[mp3|ogg]",
      E4: "E4.[mp3|ogg]",
      E5: "E5.[mp3|ogg]",
      E6: "E6.[mp3|ogg]",
      F7: "F7.[mp3|ogg]",
      F1: "F1.[mp3|ogg]",
      F2: "F2.[mp3|ogg]",
      F3: "F3.[mp3|ogg]",
      F4: "F4.[mp3|ogg]",
      F5: "F5.[mp3|ogg]",
      F6: "F6.[mp3|ogg]",
      "F#7": "Fs7.[mp3|ogg]",
      "F#1": "Fs1.[mp3|ogg]",
      "F#2": "Fs2.[mp3|ogg]",
      "F#3": "Fs3.[mp3|ogg]",
      "F#4": "Fs4.[mp3|ogg]",
      "F#5": "Fs5.[mp3|ogg]",
      "F#6": "Fs6.[mp3|ogg]",
      G7: "G7.[mp3|ogg]",
      G1: "G1.[mp3|ogg]",
      G2: "G2.[mp3|ogg]",
      G3: "G3.[mp3|ogg]",
      G4: "G4.[mp3|ogg]",
      G5: "G5.[mp3|ogg]",
      G6: "G6.[mp3|ogg]",
      "G#7": "Gs7.[mp3|ogg]",
      "G#1": "Gs1.[mp3|ogg]",
      "G#2": "Gs2.[mp3|ogg]",
      "G#3": "Gs3.[mp3|ogg]",
      "G#4": "Gs4.[mp3|ogg]",
      "G#5": "Gs5.[mp3|ogg]",
      "G#6": "Gs6.[mp3|ogg]",
    },
    baseUrl: "/samples/piano/",
    onload: () => {
      setLoaded(true);
      piano.toDestination();
    },
  });
  // }, []);

  const onClickHandler = () => {
    // //주석 console.log("온클릭!!");
    const now = Tone.now();
    Tone.Transport.bpm.value = 100;
    notes.forEach((e) => {
      // Tone.Transport.start();
      cello.triggerAttackRelease(e[0], e[1], now + e[2]);
      // piano.triggerAttackRelease(e[0], e[1], now + e[2]);
    });
  };

  // const map = {};
  // //["G3", 0.25, 0],
  // notes.forEach((e) => {
  //   if (map[e[2]]) {
  //     map[e[2]].push(e[0]);
  //   } else {
  //     map[e[2]] = [e[0]];
  //   }
  // });

  // const notesEntries = Object.entries(map);

  // useEffect(() => {
  //   //주석 console.log(pianoLoaded);
  //   if (!pianoLoaded) return;

  //   testNotes.forEach((e) => {
  //     // //주석 console.log(JSON.stringify(e));
  //     // piano.triggerAttackRelease(e[0], e[1], e[2]);
  //     // polySynth.triggerAttackRelease(e[0], e[1], e[2]);
  //   });

  //   Tone.Transport.bpm.value = 120;
  // }, [pianoLoaded]);

  return (
    <div>
      {JSON.stringify(notes)}{" "}
      {loaded && celloLoaded ? (
        <div
          onClick={() => {
            // piano.triggerAttack("A3");
            //주석 console.log(JSON.stringify(notes));
            onClickHandler();
          }}
        >
          실행하기
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PianoTransport;
