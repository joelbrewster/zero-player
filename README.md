# zero-player
This app is an interface that creates random melodies and chords from cellular automation patterns. A user can interact with the app via a monome (OSC device), computer keyboard or with just the mouse. When the user alters the grid, certain different melodies or chords will be generated and played back.

[Download the app here](https://github.com/joelbrewster/zero-player-app/releases/download/0.1/zero-player.zip).
- Remember to change the gatekeeper settings: ["Allow applications downloaded from: Anywhere"](https://support.apple.com/en-au/HT202491).

- Audio doesn't work in Safari. Try and use Google chrome.

[Use it online here](https://joelbrewster.github.io/zero-player/index.html).

- You can use the mouse, the keyboard or something like a [monome](https://en.wikipedia.org/wiki/Monome) to interface with zero-player.
  - If you want to use the monome check out the monome folder in the repository.
    - MaxMSP file for osc routing.
    - OSCulator file for qwerty routing.
    - Load both files and plug in the monome. Then in the MaxMSP path, change the MIDI output to Osculator in.
    - Select the app or the web browser with zero-player in the foreground.
    - Try to make the patterns presented on the modal with the monome.

## Game of Life
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by over-population.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

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
- Keyboard inputs (using key codes was so tedious and sometimes didn't work with certain chrome extensions).
- all input is in keyboard.js

**[Vex.js](http://github.hubspot.com/vex/api/advanced/)**
- for a pretty modal help popup thing.

**[MaxMSP](http://monome.org/docs/app/package/)**
- Routing the osc data from the [monome](http://monome.org/) to localhost(8000).

**[OSCulator](http://www.osculator.net/)**
- Changing the data from localhost to qwerty keyboard keys for input.

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

