(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Copyright 2015 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Ryan Lee

'use strict';
/*jslint node:true, indent:2, nomen:true*/
/*globals Tone*/

/*
var bass = new Tone.MonoSynth()
  .toMaster()
  .setPreset("Bassy");
bass.volume.value = -10;

var keys = new Tone.PolySynth(3, Tone.MonoSynth)
  .toMaster()
  .setPreset("Pianoetta");
keys.volume.value = -30;

var Score = {
  "bass" : [["0:0", "C2", "2n"], ["0:3:2", "C3", "8n"]],
  "keys" : [["0:0:2", ["E4", "G4", "A4"]], ["0:0:3", ["E4", "G4", "A4"]], ["0:1:3", ["E4", "G4", "A4"]]],
};
*/

var keys = new Tone.MonoSynth()
  .toMaster()
  .setPreset("Pianoetta");
keys.volume.value = -30;
  
var Score = {
  "keys" : [
    ["0:0:0", "E5", "8t"],
    ["0:0:3", "E5", "16t"],
    ["0:0:4", "G5", "16t"],
    ["0:0:5", "F#5", "16t"],
    ["0:0:6", "D5", "8t"],
    ["0:0:8", "E5", "4n"],

    ["0:3:12", "D5", "8t"],

    ["1:0:0", "D5", "16t"],
    ["1:0:1", "C5", "16t"],
    ["1:0:2", "B4", "16t"],
    ["1:0:3", "D5", "16t"],
    ["1:0:4", "C5", "8t"],
    ["1:0:6", "C5", "8t"],
    ["1:1:0", "B4", "4n"]
  ]
};

//create events for all of the notes
Tone.Note.parseScore(Score);

//route the note channels
Tone.Note.route("keys", function (time, note, duration) {
  keys.triggerAttackRelease(note, duration, time);
});

/*
Tone.Note.route("keys", function (time, value) {
  var velocity = Math.random() * 0.5 + 0.4, i;
  for (i = 0; i < value.length; i += 1) {
    keys.triggerAttackRelease(value[i], "16n", time, velocity);
  }
});
*/

//setup the transport values
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "2:0";
Tone.Transport.loop = true;
Tone.Transport.bpm.value = 40;
//Tone.Transport.timeSignature = .75;

Tone.Transport.start();

var mute = false;
$('#mute').on('click', function () {
  mute = !mute;
  if (mute) {
    $('#mute').text('Play Sound');
    Tone.Transport.stop();
  } else {
    $('#mute').text('Mute');
    Tone.Transport.start();
  }
});

},{}]},{},[1]);
