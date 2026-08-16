/// <reference path="../types/dphelper.d.ts" />
export interface CoordsTool {
  degreesToRadians: (degrees: any) => any
  latToMeters: (points: any) => any
  toVector: (points: any) => any
  convertToDecDegrees: (deg: any, minutes: any, sec: any, direction: any) => any
  distance: (point1: any, point2: any) => any
  polarToCartesian: (centerX: any, centerY: any, radius: any, angleInDegrees: any) => any
  mapDegreesToPixels: (degree: number, minDegree: number, maxDegree: number, minPixel: number, maxPixel: number, padding: number) => number
}

export const coords: CoordsTool
