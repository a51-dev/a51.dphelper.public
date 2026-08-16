/// <reference path="../types/dphelper.d.ts" />
export interface FormatTool {
  currency: (value: number, locale?: string, currency?: string) => string
  phoneNumber: (value: string, countryCode?: string) => string
}

export const format: FormatTool
