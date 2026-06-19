# audio

Audio playback utilities for managing sound effects and background music in web applications.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `play` | Plays an audio file or removes all audio elements | `dphelper.audio.play('notification.mp3', '/sounds/')` |

## Description

Simple audio management for web applications:
- **Play Sound** - Load and play audio files with optional looping
- **Stop All** - Remove all dpHelper audio elements from the DOM
- **Multiple Sounds** - Play different sounds simultaneously (each gets unique ID)

## Usage Examples

### Playing Sound Effects

```javascript
// Play a simple notification sound
dphelper.audio.play('notification.mp3');

// Play with custom path
dphelper.audio.play('click.mp3', '/assets/sounds/');

// Loop background music
dphelper.audio.play('music.mp3', '/assets/audio/', true);
```

### Stopping Audio

```javascript
// Stop all dpHelper audio elements
dphelper.audio.play();

// This removes all audio tags created by dphelper.audio
```

### Complete Example

```javascript
// Sound manager class
class SoundManager {
  constructor(soundPath = '/sounds/') {
    this.path = soundPath;
    this.enabled = true;
  }

  playSound(name, loop = false) {
    if (!this.enabled) return;
    dphelper.audio.play(name, this.path, loop);
  }

  stopAll() {
    dphelper.audio.play(); // No args = remove all
  }

  toggle(enabled) {
    this.enabled = enabled;
    if (!enabled) this.stopAll();
  }
}

// Usage
const sounds = new SoundManager('/assets/sounds/');

// Play various sounds
sounds.playSound('click.mp3');
sounds.playSound('notification.mp3');
sounds.playSound('background.mp3', true); // Loop

// Mute all
sounds.toggle(false);

// Unmute
sounds.toggle(true);
```

### UI Sound Effects

```javascript
// Add sounds to UI interactions
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    dphelper.audio.play('click.mp3', '/sounds/');
  });
});

// Form submission
document.querySelector('form').addEventListener('submit', () => {
  dphelper.audio.play('success.mp3', '/sounds/');
});

// Error handling
function showError() {
  dphelper.audio.play('error.mp3', '/sounds/');
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20240924
- **Last Modified:** 20240924
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
