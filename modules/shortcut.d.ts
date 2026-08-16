/// <reference path="../types/dphelper.d.ts" />
export interface ShortcutTool {
  keys: (e: any, trigger: any) => void
}

export const shortcut: ShortcutTool
