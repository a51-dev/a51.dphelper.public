# screen

Functionality for screen and fullscreen management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `fullScreen` | Enter fullscreen mode | `dphelper.screen.fullScreen(element)` |
| `toggle` | Toggle fullscreen mode | `dphelper.screen.toggle(element)` |

## Description

Browser fullscreen control:
- **Fullscreen** - Request fullscreen for any element
- **Toggle** - Switch between fullscreen and normal mode
- **Video** - Perfect for video players and presentations

## Usage Examples

### Enter Fullscreen

```javascript
// Fullscreen entire page
dphelper.screen.fullScreen();

// Fullscreen specific element
const video = document.getElementById('myVideo');
dphelper.screen.fullScreen(video);

// Fullscreen modal
const modal = document.getElementById('modal');
dphelper.screen.fullScreen(modal);
```

### Toggle Fullscreen

```javascript
// Toggle on/off
dphelper.screen.toggle();

// Toggle specific element
const element = document.getElementById('container');
dphelper.screen.toggle(element);
```

### Video Player Fullscreen

```javascript
// Fullscreen video player
const videoPlayer = document.getElementById('video-player');
const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
  dphelper.screen.toggle(videoPlayer);
});

// Handle fullscreen change
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('Entered fullscreen');
  } else {
    console.log('Exited fullscreen');
  }
});
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20240101
- **Last Modified:** 20240101
- **Environment:** client (browser)

---

*Automatically generated document*
