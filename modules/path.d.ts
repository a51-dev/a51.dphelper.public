/// <reference path="../types/dphelper.d.ts" />
export interface PathTool {
  rail: () => string[]
  hash: () => string[]
  query: (url: string) => Record<string, string>
}

export const path: PathTool
