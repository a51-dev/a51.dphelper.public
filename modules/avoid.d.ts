/// <reference path="../types/dphelper.d.ts" />
export interface AvoidTool {
  cache: (uri: string) => string
}

export const avoid: AvoidTool
