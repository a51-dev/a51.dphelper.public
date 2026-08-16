/// <reference path="../types/dphelper.d.ts" />
export interface BrowserTool {
  state(state: any, title: any, url: any): void
  forw(times: number): void
  back(times: number): void
  reload(): void
  href(url: string): void
  offLine(text?: string): void
  zoom(): number
  status(code: number): string
  interlock(onUpdate: (tabs: number) => void): void
}

export const browser: BrowserTool
