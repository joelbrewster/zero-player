initial setup
php server
localhost


# zero-player

## colors
- #61DAFB
- #2D2D2D
- #222222
- #CC7A6F
- #F9F9F9


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
I wanted to create an interesting spin on Conway's Game of Life and use hardware to interface with it. It needed to be controlled via something tangible. It needed to give the user visual and auditory feedback. It needed to be simple and straight forward to set up. It needed to be part of the open source monome community.

The overall goal was to make the user be able to interface with the app without instructions and just play.


## Code
**nexusUI**
- The Matrix element.
- Envelope element.
- The function for Conway's Game of Life.

**tone.js**
- Generating the audio.
- Generating the oscillator types.
- Applying filters and sound effects(ping pong delay).
- Applying the envelope (ADSR).

**mousetrap.js**
Keyboard inputa(using keycodes was so tedious and sometimes didn't work with certain chrome extensions).
- all input is in keyboard.js

**MaxMSP()**
- Routing the osc data from the monome to localhost(8000).

**OSCulator**
- Changing the data from localhost to qwerty keyboard keys for input.




## Main problems
I really hoped to make this app something portable that can be used my many people so I didn't want to have to run php or node servers. I got it to a stage where I could get osc messages from the front end sent to a max msp patch but it wasn't optimal.




## Layout
```
┌─────────────────────────────────────────────────┐ ┌──────┐
│                                                 │ │ adsr │
│▁▂▃▄▅▆▇███████▇▇▇▅▅▅▅▃▃▃▃▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁     │ │ info │
└─────────────────────────────────────────────────┘ └──────┘
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


## Roadblocks
  ```
if (data.grid[i][j])

  ```
  would return an object, not the grid[i][j]
  I presumed it'd be true, but it would return undefined, 0, and all the things I can do to the array.


  ```
if (data.grid[i][j] == 1)
  ```


## Keyboard input
- Initially I had this:
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

- I ended up going with mousetrap so speed along typing keys instead of using charcodes.
```
Mousetrap.bind('1', function() {
    matrix1.matrix[0][0] = 1;
    console.log("1 pressed");
    etc
});
```

