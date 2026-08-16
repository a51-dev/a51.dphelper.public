/// <reference path="../types/dphelper.d.ts" />
export interface LoadTool {
  all: (context: any, cacheName?: string) => void
  file: (filePath: string) => Promise<string>
  fileToElement: (elementSelector: string, filePath: string) => Promise<void>
  json: (filePath: string) => Promise<any>
  remote: (path: string, method?: string, headers?: HeadersInit) => Promise<any>
  script: (scripts: string[], elementSelector?: string) => void
  toJson: (context: any, cacheName?: string) => void
}

export const load: LoadTool
