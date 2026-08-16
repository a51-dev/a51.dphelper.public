/// <reference path="../types/dphelper.d.ts" />
export interface EventsTool {
  list: (el: Element) => any
  multi: (element: Element, eventNames: string, listener: EventListener) => void
  copy: (el: string) => void
  onDrag: (elem: string) => void
  keys: (e: KeyboardEvent) => { key: string; ctrl: boolean; alt: boolean; shift: boolean }
}

export const events: EventsTool
