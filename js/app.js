//TODO Use monoGrid to send OSC data from js to MAXMSP - Set lights on the monome as user feedback
//TODO Send osc data back to the monome
// http://monome.org/


// Draw the grid array
var monoGrid = new Array(8);

n = 8;
m = 8;

// Loop over the array
for (var i = 0; i < n; i++) {
  monoGrid[i] = new Array(8);
  for (var j = 0; j < m; j++) {
    monoGrid[i][j] = 0;
  }
}

//Set the audio effects
var ping = new Tone.PingPongDelay(0.16, 0.7).toMaster();

var filter = new Tone.Filter(10, "lowpass").connect(ping);

//3 voices for the synth, sounds more chordal
var synth = new Tone.PolySynth(3, Tone.MonoSynth).connect(filter);

//set the attributes using the set interface
synth.set({
  volume: -25,
  oscillator: {
    type: "square6"
  },
  filter: {
    Q: 3,
    type: "allpass",
    rolloff: -24
  },
  envelope: {
    attack: 0.3,
    decay: 0,
    sustain: 1,
    release: 0.3
  },
  filterEnvelope: {
    attack: 0.2,
    decay: 0,
    sustain: 1,
    release: 0.2,
    min: 20,
    max: 20,
    exponent: 2,
  }
});

nx.onload = function() {
  // Set help option for user to click the "?" on the screen or on the keyboard
  help();

  // For sending back lights to the monome
  //TODO Set this up with an ajax server when time

  // nx.sendsTo("ajax");
  // nx.setAjaxPath("lib/nexusOSCRelay.php");

  // Set colors
  nx.colorize("#2d2d2d");
  nx.colorize("accent", "#0099CC");
  nx.colorize("fill", "#2D2D2D");
  nx.colorize("border", "#ffffff");
  matrix1.cellBuffer = 8;

  // Start
  matrix1.init();

  // Set the life span for the matrix cells
  setInterval(matrix1.life, 80);

  matrix1.on('*', function(data) {
    // Make the audio more interesting
    synth.set("detune", ~~(Math.random() * 20 - 1));

    // Get i in grid
    if (data.grid) {
      for (var i = 0; i < data.grid.length; i++) {
        for (var j = 0; j < data.grid[i].length; j++) {

          if (data.grid[i][j] == 1) {
            synth.triggerAttackRelease((j + 1) * (i + 1) * 33, 0.22);
          }

          if (data.grid[i][j] != monoGrid[i][j]) {
            // TODO: send data back to the monome
            if (data.grid[i][j] == 1) {
              // turnOn monome lights
              // console.log(i, j, 1);
              matrix1.transmit(i, j);
              monoGrid[i][j] = 1;
            }
            if (data.grid[i][j] === 0) {
              // turnOff monome lights
              monoGrid[i][j] = 0;
              // console.log(i, j, 0);
              monoGrid[i][j] = 0;
            }
          }
        }
      }
    }
  });
  matrix1.draw();

  // Envelope
  envelope1.on('*', function(data) {
    if (data.amp) {
      filter.frequency.value = data.amp * 2000;
    }
  });

  // Set the sound envelope: ADSR
  envelope1.val.points = [{
    x: 0.0,
    y: 0.0
  }, {
    x: 0.2,
    y: 0.8
  }, {
    x: 0.6,
    y: 0.6
  }, {
    x: 1.0,
    y: 0.0
  }];
  envelope1.draw();
  envelope1.looping = true;
  envelope1.duration = 8192;
  envelope1.start();

};
