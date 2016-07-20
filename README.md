# zero-player

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
Keyboard inputa(using keycodes was so tedious and sometimes didn't work with certain chrome extensions).
- all input is in keyboard.js

**[Vex.js](http://github.hubspot.com/vex/api/advanced/)**
- for a pretty modal help popup thing.

**[MaxMSP()](http://monome.org/docs/app/package/)**
- Routing the osc data from the monome to localhost(8000).

**[OSCulator](http://www.osculator.net/)**
- Changing the data from localhost to qwerty keyboard keys for input.


## Process
- I first wanted to make the monome the main focus of the project. I wanted it to give visual feedback with the led and make the screen secondary.
- I had set up a [php server](https://github.com/lsu-emdm/nx-AjaxDemo) to send osc signals from the monome to the computer and back to the monome to light up the leds.
- I then noticed if people used the monome they wouldn't look at the screen at all.
- I thought if I was making this app to show a gui then people should look at that more. I just made the monome to give feedback only on button press.
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

## Roadblocks
- I originally just wanted to get the position of the matrix logging to console.

  ```
if (data.grid[i][j])

  ```
  - Changed.
  ```
if (data.grid[i][j] == 1)
  ```
- It would return an object, not the grid[i][j]. I presumed it'd always be true, but it would return undefined, 0, and all the things I can do to the array. Silly mistake.

## Keyboard input
- Initially I had this type of thing:
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
- I ended up going with mousetrap so speed along typing keys instead of using charcodes. Charcodes would sometimes work and sometimes not so deciding on using another js option was a good idea.
```
Mousetrap.bind('1', function() {
    matrix1.matrix[0][0] = 1;
    console.log("1 pressed");
    etc
});
```
