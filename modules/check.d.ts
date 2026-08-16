/// <reference path="../types/dphelper.d.ts" />
export interface CheckTool {
  url: (url: string) => any
  version: (v1: string, v2: string, opts?: any) => any
  npmVer: (npm: string) => any
}

export const check: CheckTool
