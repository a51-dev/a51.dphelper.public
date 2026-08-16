/// <reference path="../types/dphelper.d.ts" />
export interface LoggingTool {
  list: {
    type: string
    message: string
  }[]
  reg: (txt: string) => void
  debug: (txt: string) => void
  error: (txt: string) => void
}

export const logging: LoggingTool
