/// <reference path="../types/dphelper.d.ts" />
export interface ToolsTool {
  getip(): Promise<void>
  byteSize(bytes: number): string
  zIndex(): number
  zeroToFalse(value: number): boolean | number
}

export const tools: ToolsTool
