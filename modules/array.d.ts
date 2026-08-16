/// <reference path="../types/dphelper.d.ts" />
export interface ArrayTool {
  find<T>(array: T[], key: any): T
  unique<T>(array: T[]): T[]
  delete<T>(array: T[], key: keyof T): void
  merge<T>(arrayA: T[], arrayB: T[]): T[]
  mergeByKey<T extends Record<string, any>>(arrayA: T[], arrayB: T[], key: keyof T): T[]
  asc<T>(array: T[]): T[]
  desc<T>(array: T[]): T[]
  duplicates<T>(array: T[]): T[]
  even<T>(array: T[]): T[]
  odd<T>(array: T[]): T[]
  toObj<T>(array: T[]): Record<string, T>
  sumColumn(array: number[][], column: number): number
  shuffle<T>(array: T[]): T[]
  generate(num: number): number[]
  testArrayInt(array: unknown[]): number[]
  rand32(number: number): number
  findindex<T>(array: T[], key: any): number
  pathToJson(array: string[], separator?: string): Record<string, unknown>
  deepClone<T>(src: T): T
  match(arrayWords: string[], arrayToCheck: string[]): boolean
}

export const array: ArrayTool
