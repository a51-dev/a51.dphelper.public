/// <reference path="../types/dphelper.d.ts" />
export interface TimerTool {
  sleep(ms: number): Promise<void>
  percentage(start: string, end: string): string
}

export const timer: TimerTool
