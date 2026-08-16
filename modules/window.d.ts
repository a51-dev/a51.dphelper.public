/// <reference path="../types/dphelper.d.ts" />
export interface WindowTool {
  enhancement(): void
  animationframe(): any
  center(params: { url: string; title: string; name: string; w: number; h: number }): void
  onBeforeUnLoad(e: any): void
  purge(d?: Document, time?: number): void
  stopZoomWheel(e: any): void
  setZoom(element?: string, zoom?: number): string
  getZoom(element?: string): number
}

export const window: WindowTool
