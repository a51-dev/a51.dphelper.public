/// <reference path="../types/dphelper.d.ts" />
export interface DispatchTool {
  set: (name: string, value?: any) => void
  listen: (name: string, cb?: (e: Event) => void, flag?: boolean) => void
  remove: (name: string) => void
}

export const dispatch: DispatchTool
