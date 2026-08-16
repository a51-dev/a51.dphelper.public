/// <reference path="../types/dphelper.d.ts" />
export interface PromiseTool {
  check: (p: any) => boolean
  resolve: (data: any) => Promise<any>
}

export const promise: PromiseTool
