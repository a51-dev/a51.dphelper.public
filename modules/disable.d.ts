/// <reference path="../types/dphelper.d.ts" />
export interface DisableTool {
  select: (el?: string) => void
  spellCheck: (tmr?: number) => void
  rightClick: (el?: string) => void
  copy: (el?: string) => void
  paste: (el?: string) => void
  cut: (el?: string) => void
  drag: (el?: string) => void
}

export const disable: DisableTool
