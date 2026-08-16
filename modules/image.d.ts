/// <reference path="../types/dphelper.d.ts" />
export interface ImageTool {
  resize: (img: HTMLImageElement, width: number, height: number, quality?: "pixelated" | "auto") => string
  crop: (img: HTMLImageElement, region: { x: number; y: number; width: number; height: number }) => string
  toDataURL: (img: HTMLImageElement | HTMLCanvasElement, format?: string, quality?: number) => string
  fromDataURL: (dataURL: string) => Promise<HTMLImageElement>
  filter: (img: HTMLImageElement, options: { brightness?: number; contrast?: number; saturate?: number; hueRotate?: number; invert?: number; sepia?: number; blur?: number; grayscale?: number }) => string
  rotate: (img: HTMLImageElement, degrees: number) => string
  flip: (img: HTMLImageElement, direction: "horizontal" | "vertical") => string
  grayscale: (img: HTMLImageElement) => string
  blur: (img: HTMLImageElement, radius: number) => string
  getDimensions: (img: HTMLImageElement | HTMLCanvasElement) => { width: number; height: number }
  load: (src: string) => Promise<HTMLImageElement>
  composite: (img1: HTMLImageElement, img2: HTMLImageElement, mode?: "source-over" | "multiply" | "screen" | "overlay" | "darken" | "lighten", x?: number, y?: number) => string
}

export const image: ImageTool
