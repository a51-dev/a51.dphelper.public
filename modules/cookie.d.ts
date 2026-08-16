/// <reference path="../types/dphelper.d.ts" />
export interface CookieTool {
  set: (pars: {
    name: any,
    value: any,
    time?: any,
    path?: string,
    sameSite?: string,
    secure?: string
  }) => any
  get: (name: string) => any
  delete: (name: string) => any
  removeAll: () => any
}

export const cookie: CookieTool
