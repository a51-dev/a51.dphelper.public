/// <reference path="../types/dphelper.d.ts" />
export interface AudioTool {
  /**
   * Plays an audio file if it is not already playing.
   * If no file is specified, removes all audio elements from the document.
   *
   * @param file - The name of the audio file to play.
   * @param path - The path to the audio file.
   * @param loop - Whether the audio should loop.
   */
  play: (file?: string, path?: string, loop?: boolean) => void
}

export const audio: AudioTool
