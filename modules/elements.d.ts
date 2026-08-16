/// <reference path="../types/dphelper.d.ts" />
export interface ElementsTool {
  fitScale: (el: any, scale?: number, fit?: boolean) => void
  scaleBasedOnWindow: (elm: any, scale: number, fit: boolean) => void
}

export const element: ElementsTool
