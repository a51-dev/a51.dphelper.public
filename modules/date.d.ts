/// <reference path="../types/dphelper.d.ts" />
export interface DateTool {
  days: (lang?: string) => string[]
  months: (lang?: string) => string[]
  year: () => number
  toIso: (value: any, int?: string) => string | null
  toMMDDYYYY: (value: any) => string
  toYYYYMMDD: (value: any) => string | undefined
  toHuman: (value: any) => string
  convert: (value: any, format: string[]) => string | null
  iso2Epoch: (value: any) => number
  localIsoTime: (value: any) => string
  utc: () => string
  parse: (value: any, separator?: string) => string | null
  addDays: (date: any, days: number) => Date
  dateTimeToString: (dateObject: any) => string
  isoToHuman: (value: any, symbol?: string) => string | null
  fullDate: () => string
  epoch: () => number
  diffInDays: (d1: any, d2: any) => number
  diffInWeeks: (d1: any, d2: any) => number
  diffInMonths: (d1: any, d2: any) => number
  diffInYears: (d1: any, d2: any) => number
  dateToYMD: (date: any) => string
  collection: (params: { date?: Date; type: string; locale?: string }) => string | undefined
  timeZones: () => string[]
}

export const date: DateTool
