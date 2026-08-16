/// <reference path="../types/dphelper.d.ts" />
export interface MathTool {
  rnd: () => number
  tmr: () => number
  add: (a: number, b: number) => number
  sub: (a: number, b: number) => number
  multi: (a: number, b: number) => number
  div: (a: number, b: number) => number
  rem: (a: number, b: number) => number
  exp: (a: number, b: number) => number
  isOdd: (a: number) => boolean
  float2int: (a: number) => number
  percent: (n: number, tot: number) => number
  isPrime: (n: number) => boolean
}

export const math: MathTool
