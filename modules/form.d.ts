/// <reference path="../types/dphelper.d.ts" />
export interface FormTool {
  serialize: (form: HTMLFormElement) => { [key: string]: any }
  confirmType: (type: string, value: any) => boolean
  required: (value: any) => string | undefined
  minLength: (value: any, num?: number) => string | undefined
  maxLength: (value: any, num?: number) => string | undefined
  maxPhoneNumber: (value: any, num?: number) => string | undefined
  isNumeric: (value: any) => boolean
  isEmail: (value: any) => boolean
  pattern: (e: Event) => void
  noSpecialChars: (e: Event) => void
  table: (size: [number, number], id: string, elem: HTMLElement) => void
  sanitize: (str: string) => string | undefined
}

export const form: FormTool
