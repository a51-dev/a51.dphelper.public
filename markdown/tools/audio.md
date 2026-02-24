# audio

Management of audio playback in web pages.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `play` | Plays an audio file or stops existing ones | `dphelper.audio.play('sound.mp3')` |

## Description

Plays an audio file if it is not already playing. If called without arguments, it stops and removes **only** the audio elements previously created by `dphelper`, protecting other players on the page.

## Parameters

- `file` - (Optional) Name of the audio file. If omitted, cleans up its own audio elements.
- `path` - File path (default: "").
- `loop` - Continuous playback (default: false).

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20240924
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
