# zero-player
[Download the app here](https://dl.dropboxusercontent.com/u/250610/zero-player-app.zip).
- Remember to change the gatekeeper settings: ["Allow applications downloaded from: Anywhere"](https://support.apple.com/en-au/HT202491).

[Use it online here](https://www.joelbrewster.com/zero-player/).

- You can use the mouse, the keyboard or something like a [monome](https://en.wikipedia.org/wiki/Monome) to interface with zero-player.
  - If you want to use the monome check out the monome folder in the repository.
    - MaxMSP file for osc routing.
    - OSCulator file for qwerty routing.
    - Load both files and plug in the monome. Then in the MaxMSP path, change the MIDI output to Osculator in.
    - Select the app or the web browser with zero-player in the foreground.
    - Try to make the patterns presented on the modal with the monome.

## Introduction
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.

## Examples of patterns
Many different types of patterns occur in the Game of Life, including still lifes, oscillators, and patterns that translate themselves across the board ("spaceships"). Some frequently occurring examples of these three classes are shown below, with live cells shown in black, and dead cells shown in white.

### Oscillators
![Pulsar - period 3](https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif)
![Pentadecathlon - period 15](https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif)
![Toad - period 2](https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif)
![Baecon - period 2](https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif)
![Blinker - period 2](https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif)

### Spaceships
![Lightweight spaceship](https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif)
![Glider](https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif)

### Still lifes
![Loaf](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/196px-Game_of_life_loaf.svg.png)
![Beehive](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/196px-Game_of_life_beehive.svg.png)
![Boat](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/164px-Game_of_life_boat.svg.png)
![Block](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/132px-Game_of_life_block_with_border.svg.png)


## Scope
I wanted to create an interesting spin on Conway's Game of Life and use hardware to interface with it. It needed to be controlled via something tangible. It needed to give the user visual and auditory feedback. It needed to be simple and straight forward to set up. It needed to be easy to use by non-developers.

The overall goal was to make the user be able to interface with the app with minimal instructions and just play.


## Code
**[nexusUI](http://www.nexusosc.com/#Getting-Started_doc)**
- The Matrix element.
- Envelope element.
- The function for Conway's Game of Life.

**[tone.js](https://tonejs.github.io/docs/)**
- Generating the audio.
- Generating the oscillator types.
- Applying filters and sound effects(ping pong delay).
- Applying the envelope (ADSR).

**[mousetrap.js](https://github.com/ccampbell/mousetrap)**
Keyboard inputs (using key codes was so tedious and sometimes didn't work with certain chrome extensions).
- all input is in keyboard.js

**[Vex.js](http://github.hubspot.com/vex/api/advanced/)**
- for a pretty modal help popup thing.

**[MaxMSP(http://monome.org/docs/app/package/)**
- Routing the osc data from the [monome](http://monome.org/) to localhost(8000).

**[OSCulator](http://www.osculator.net/)**
- Changing the data from localhost to qwerty keyboard keys for input.


## Process
- I first wanted to make the [monome](http://monome.org/) the main focus of the project. I wanted it to give visual feedback with the led and make the screen secondary.
- I had set up a [php server](https://github.com/lsu-emdm/nx-AjaxDemo) to send osc signals from the [monome](http://monome.org/) to the computer and back to the [monome](http://monome.org/) to light up the leds.
- I then noticed if people used the [monome](http://monome.org/) they wouldn't look at the screen at all.
- I thought if I was making this app to show a gui then people should look at that more. I just made the [monome](http://monome.org/) to give feedback only on button press.
- I linked the computers keyboard to trigger events on the screen as well like a grid shown in the layout section below.
- I wanted to package up the app into a something more portable with electron.


## Layout
```
┌─────────────────────────────────────────────────┐ ┌───────┐
│                                                 │ │ *adsr │
│▁▂▃▄▅▆▇███████▇▇▇▅▅▅▅▃▃▃▃▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁     │ │  info │
└─────────────────────────────────────────────────┘ └───────┘
┌─────────────────────────────────────────────────┐
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │ │ 7 │ │ 8 │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ q │ │ w │ │ e │ │ r │ │ t │ │ y │ │ u │ │ i │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ a │ │ s │ │ d │ │ f │ │ g │ │ h │ │ j │ │ k │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ z │ │ x │ │ c │ │ v │ │ b │ │ n │ │ m │ │ , │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ ! │ │ @ │ │ # │ │ $ │ │ % │ │ ^ │ │ & │ │ * │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ Q │ │ W │ │ E │ │ R │ │ T │ │ Y │ │ U │ │ I │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ A │ │ S │ │ D │ │ F │ │ G │ │ H │ │ J │ │ K │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
│ │ Z │ │ X │ │ C │ │ V │ │ B │ │ N │ │ M │ │ < │ │
│ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
└─────────────────────────────────────────────────┘
```
- adsr - Refers to Attack, Decay, Sustain and Release of the sound being generated.

#### Main screen
- Has some starter layouts to play with displayed.
```
        ┌─────────────────────────────────────────────────┐
        │                                                 │
        │▁▂▃▄▅▆▇███████▇▇▇▅▅▅▅▃▃▃▃▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁     │
        └─────────────────────────────────────────────────┘
        ┌─────────────────────────────────────────────────┐
□□□□□□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □□□□□□
□□●●□□  │ │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │ │ 7 │ │ 8 │ │  □□□●□□
□□●●□□  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │  □□●□●□
□□□□□□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □□□●□□
□□□□□□  │ │ q │ │ w │ │ e │ │ r │ │ t │ │ y │ │ u │ │ i │ │  □□□□□□
        │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
        │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
        │ │ a │ │ s │ │ d │ │ f │ │ g │ │ h │ │ j │ │ k │ │
        │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
□□□□□□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □□□□□□
□□●□□□  │ │ z │ │ x │ │ c │ │ v │ │ b │ │ n │ │ m │ │ , │ │  □□●●□□
□●□●□□  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │  □●□□●□
□□●●□□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □□●●□□
□□□□□□  │ │ ! │ │ @ │ │ # │ │ $ │ │ % │ │ ^ │ │ & │ │ * │ │  □□□□□□
        │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
        │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
        │ │ Q │ │ W │ │ E │ │ R │ │ T │ │ Y │ │ U │ │ I │ │
□□□□□□  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │  □□●□□□
□●□●●□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □●□●□□
□●●□●□  │ │ A │ │ S │ │ D │ │ F │ │ G │ │ H │ │ J │ │ K │ │  □□●□●□
□□□□□□  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │  □□□●□□
□□□□□□  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │  □□□□□□
        │ │ Z │ │ X │ │ C │ │ V │ │ B │ │ N │ │ M │ │ < │ │
        │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │
        └─────────────────────────────────────────────────┘
```

- I moved the information on the sides to be shown in a modal on page reload.

## Roadblocks and thoughts
- After getting the matrix grid working, I just wanted to get the triggered positions of the matrix logging to console.

  ```
if (data.grid[i][j])

  ```
  - Changed to:
  ```
if (data.grid[i][j] == 1)
  ```
- It would return an object, not the grid[i][j]. I presumed it'd always be true, but it would return undefined, 0, and all the things I can do to the array. Silly mistake.

- Routing the [monome](http://monome.org/) with MaxMSP,then routing it to OSCulator, and then linking that to Mousetrap.js to trigger rows/columns on the screen is super clunky.
  - I'd like to find a way to do this without relying on so many routes.

- Initially I had this type of thing to trigger the rows/grids with the computer keyboard:
```
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {

  if (e.keyCode == "49") {
    console.log("1 was pressed");
    matrix1.matrix[0][0] = 1;
    etc
  }
}
```
- I ended up going with mousetrap.js to speed along typing keys instead of using charcodes. Charcodes would sometimes work and sometimes not so deciding on using another js option was a good idea.
```
Mousetrap.bind('1', function() {
    matrix1.matrix[0][0] = 1;
    console.log("1 pressed");
    etc
});
```
- After demoing this app to several different people and people not getting what to do, I decided to add a modal on app startup and link the help function to a ? button and to a "?" keyboard shortcut.
``

- It took a few days to get the loading order working with javascript and electron.
  - When I loaded my index and js files in the electron app it would load them in different orders.
  - I thought it was Tone.js causing problems but it turned out to be a common problem with jQuery and electron apps.
I found a [post on stack overflow](http://stackoverflow.com/questions/32621988/electron-jquery-is-not-defined) that fixed all my problems in 2 lines
- I compiled the app from a guide on the [electron documentation](https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md#os-x) site.


## Future goals
- I'd like to redo the modal popup and talk to an interface designer about how to make it more obvious what to do with the grid.
- I'd like to implement some keyboard shortcuts to change the sound ADSR and type of wave form.
