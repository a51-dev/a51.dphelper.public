/// <reference path="../types/dphelper.d.ts" />
export interface SanitizeTool {
  html: (s: string) => string
}

export const sanitize: SanitizeTool
