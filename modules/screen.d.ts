/// <reference path="../types/dphelper.d.ts" />
export interface ScreenTool {
  fullScreen: (el: string) => void
  toggle: (el: string) => void
  info: () => {
    width: number
    height: number
    availWidth: number
    availHeight: number
    colorDepth: number
    pixelDepth: number
  }
}

export const screen: ScreenTool
