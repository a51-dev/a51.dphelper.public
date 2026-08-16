/// <reference path="../types/dphelper.d.ts" />
export interface JsonTool {
  counter: (json: any, key?: string, val?: any) => number | null
  toCsv: (jsonInput: any) => string
  saveCsvAs: (csvData: string, fileName: string) => void
  is: (str: string) => boolean
  parse: (file: string) => any
  sanitize: (str: string) => string
  sanitizeJsonValue: (str: string) => string
}

export const json: JsonTool
