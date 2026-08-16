/// <reference path="../types/dphelper.d.ts" />
export interface SvgTool {
  init: (container: HTMLElement, source1: [HTMLElement, string], source2: [HTMLElement, string], cb?: Function) => void
  check: () => boolean
  update: (rect1: HTMLElement, rect2: HTMLElement, cxn: HTMLElement) => void
  getCurve: (p1: [number, number], p2: [number, number], dx: number) => string
  getIntersection: (dx: number, dy: number, cx: number, cy: number, w: number, h: number) => [number, number]
  setConnector: (source: HTMLElement, side: string) => HTMLElement
  removeConnection: (container: HTMLElement) => void
  makeScrollable: (svgContainer: HTMLElement, scrollContainer: HTMLElement, elm1: HTMLElement, elm2: HTMLElement, rect1: HTMLElement, rect2: HTMLElement) => void
  makeDraggable: (evt: Event) => void
  toggle: (evt: Event, container: HTMLElement, source1: HTMLElement, source2: HTMLElement) => void
  convert: (options: any) => string | void
}

export const svg: SvgTool
