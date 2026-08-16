/// <reference path="../types/dphelper.d.ts" />
export interface UiTool {
  anchorContext(): void
  [key: string]: any
}

export const ui: UiTool
