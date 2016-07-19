// gobal variable monoGrid
// Use monoGrid later to send osc data
var monoGrid = new Array(8);

// init monoGrid... maybe move to init function when have one
for (var i = 0, n = 8; i < n; i++) {
  monoGrid[i] = new Array(8);
  for (var j = 0, m = 8; j < m; j++) {
    monoGrid[i][j] = 0;
  }
}

var ping = new Tone.PingPongDelay(0.16, 0.7).toMaster();

var filter = new Tone.Filter(10, "lowpass").connect(ping);

//a polysynth composed of 6 Voices of MonoSynth
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
  help();

  // For sending back lights to the monome
  // nx.sendsTo("ajax");
  // nx.setAjaxPath("lib/nexusOSCRelay.php");
  nx.colorize("#2d2d2d");
  nx.colorize("accent", "#0099CC");
  nx.colorize("fill", "#2D2D2D");
  // Change matrix to be lighter?
  // nx.colorize.matrix1("fill", "#989898");
  nx.colorize("border", "#ffffff");
  matrix1.cellBuffer = 8;

  matrix1.col = 8;
  matrix1.row = 8;

  // Try to get the qwerty keys on the grid. Not sure if it'll look good
  matrix1.init();
  setInterval(matrix1.life, 80);

  // this.mode = "matrix";
	// this.matrixLabels = true;
  // this.matrixLabels = ["1","2","3","4","5","6","7","8","q","w","e","r","t","y","u","i","a","s","d","f","g","h","j","k","z","x","c","v","b","n","m",",","!","@","#","","$","","%","","^","","&","","*","Q","W","E","R","T","Y","U","I","A","S","D","F","G","H","J","K","Z","X","C","V","B","N","M","<"];
  // this.init();

  matrix1.on('*', function(data) {
    synth.set("detune", ~~(Math.random() * 20 - 1));

    if (data.grid) {
      for (var i = 0; i < data.grid.length; i++) {
        for (var j = 0; j < data.grid[i].length; j++) {

          if (data.grid[i][j] == 1) {
            synth.triggerAttackRelease((j + 1) * (i + 1) * 33, 0.22);
          }

          if (data.grid[i][j] != monoGrid[i][j]) {
            // do monome stuff
            if (data.grid[i][j] == 1) {
              // turnOn monome
              // console.log(i, j, 1);
              matrix1.transmit(i, j);
              monoGrid[i][j] = 1;
            }
            if (data.grid[i][j] === 0) {
              // turnOff monome
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

  envelope1.on('*', function(data) {
    if (data.amp) {
      filter.frequency.value = data.amp * 2000;
    }
  });

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
