/// <reference path="../types/dphelper.d.ts" />
export interface ColorTool {
  hex: (c: any) => string
  toHex: (rgb: any) => string
  toRGB: (c: any) => number[]
  oleColor: (c: any) => string
  gradient: (colorStart: any, colorEnd: any, colorCount: any) => any
}

export const color: ColorTool
