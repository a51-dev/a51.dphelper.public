/// <reference path="../types/dphelper.d.ts" />
export interface TextTool {
  trim(s: string, c: string, b: number, e: number): string
  capitalize(txt: string): string
  lower(txt: string): string
  upper(txt: string): string
  nl2br(str: string): string
  sanitize(str: string): string
  camelCase: {
    toSpace(string: string): string
    toUnderscore(string: string): string
  }
  fitContainer(el: string): void
}

export const text: TextTool
