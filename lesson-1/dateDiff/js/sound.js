// import {  Howl,  Howler,} from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js";
// const { Howl, Howler } = require('howler');

let audioStart = document.getElementById("audio1");
let audioStop = document.getElementById("audio2");

export const playStart = function () {
  audioStart.play();
};
export const playStop = function () {
  audioStop.play();
};
// ---------------
/*
var sound = new Howl({
  src: ["sound.mp3"],
});

sound.play();
*/
// ----------------
