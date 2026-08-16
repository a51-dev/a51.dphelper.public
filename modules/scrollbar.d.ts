/// <reference path="../types/dphelper.d.ts" />
export interface ScrollbarTool {
  custom: (el: string, options: any) => void
  indicator: (props: any) => void
  position: {
    get: (el: any) => void
    set: (el: any) => void
  }
  smooth: (target: any, speed: any, smooth: any) => void
  scrollTo: (container: string, element: string, gap?: number) => void
}

export const scrollbar: ScrollbarTool
