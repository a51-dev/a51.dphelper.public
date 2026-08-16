/// <reference path="../types/dphelper.d.ts" />
export interface TypesTool {
  of(p: any): string
  instOfObj(p: any): boolean
  isNull(p: any): (p: any) => boolean
  isBool(val: any): boolean
}

export const type: TypesTool
