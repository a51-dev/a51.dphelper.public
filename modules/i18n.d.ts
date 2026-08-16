/// <reference path="../types/dphelper.d.ts" />
export interface I18nTool {
  setLocale: (locale: string) => void
  getLocale: () => string
  addTranslations: (locale: string, strings: Record<string, string>) => void
  t: (key: string, vars?: Record<string, any>) => string
  pluralize: (count: number, options: { zero?: string; one?: string; two?: string; few?: string; many?: string; other?: string }, locale?: string) => string
  number: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string
  date: (value: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions) => string
  relativeTime: (timestamp: number | Date, locale?: string) => string
  list: (items: string[], locale?: string, options?: Intl.ListFormatOptions) => string
  getSupportedLocales: () => string[]
}

export const i18n: I18nTool
