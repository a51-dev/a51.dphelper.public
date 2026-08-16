/// <reference path="../types/dphelper.d.ts" />
export interface MemoryTool {
  lock: (obj: string) => void
  unlock: (obj: string) => void
}

export const memory: MemoryTool
