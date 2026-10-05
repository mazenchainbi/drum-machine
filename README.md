# Drum Machine

A browser-based drum machine built with plain HTML, CSS, and JavaScript. Click a pad or press a key on your keyboard to play a drum sample. The name of the sound shows on the display.

Built as a project for the [freeCodeCamp Front End Libraries](https://www.freecodecamp.org/) curriculum.

## Features

- Nine drum pads laid out in a 3×3 grid
- Play sounds by clicking a pad or pressing its keyboard key
- Display shows the name of the last sound played
- Pads light up briefly when triggered
- Works with the keyboard, mouse, and touch screens
- No frameworks or dependencies

## Key Map

| Key | Sound        |
| --- | ------------ |
| Q   | Heater 1     |
| W   | Heater 2     |
| E   | Heater 3     |
| A   | Heater 4     |
| S   | Clap         |
| D   | Open Hi-Hat  |
| Z   | Kick and Hat |
| X   | Kick         |
| C   | Closed Hi-Hat |

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. Open `index.html` in your browser. No build step or server is needed.

An internet connection is required because the audio samples are loaded from the freeCodeCamp CDN.

## Project Structure

```
.
├── index.html   # Page structure and audio elements
├── styles.css   # Layout and pad styling
├── script.js    # Click and keyboard handling
└── README.md
```

## How It Works

- Each pad is a `<button class="drum-pad">` containing an `<audio class="clip">` element. The audio element's `id` matches the pad's letter (`Q`, `W`, `E`, and so on).
- When a pad is clicked or its key is pressed, the `trigger(letter)` function:
  1. Finds the audio element by its id
  2. Rewinds it to the start and plays it, so rapid hits restart the sound
  3. Updates the `#display` text with the sound's name
  4. Adds an `active` class for 100 ms to light up the pad
- Keyboard input is handled by a single `keydown` listener on the document. It is case-insensitive.

## Requirements Met

- `#drum-machine` wraps all other elements
- `#pad-bank` contains nine `.drum-pad` buttons in the order Q, W, E, A, S, D, Z, X, C
- Each `.drum-pad` has a child `<audio>` with class `clip`, a valid `src`, and an id matching its letter
- `#display` is a `<p>` element that shows a unique string for each sound
- Clicking a pad or pressing its key plays the matching clip

## Audio Credits

Samples are provided by freeCodeCamp and hosted at `https://cdn.freecodecamp.org/curriculum/drum/`.
