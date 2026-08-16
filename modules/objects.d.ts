/// <reference path="../types/dphelper.d.ts" />
export interface ObjectsTool {
  toArray: (object: Record<string, any>) => [string, any][]
  replaceNullObjects: (data: Record<string, any>) => Record<string, any>
  serialize: (value: any) => any
  deSerialize: (valueNew: any) => any
  sort: (o: Record<string, any>) => Record<string, any>
  toXML: (obj: Record<string, any>) => string
  find: (array: any[], key: string, value: any) => any
  instance: (obj: any) => any
  updateByKey: (obj: Record<string, any>, key: string, newValue: any) => Record<string, any>
  findindex: (array: any[], key: string) => number
  parse: (val: any) => any
  isObject: (val: any) => boolean
  diff: (obj1: Record<string, any>, obj2: Record<string, any>) => Record<string, { obj1: any, obj2: any }>
  path: (prop: string, array: string[], separator?: string) => string
}

export const object: ObjectsTool
