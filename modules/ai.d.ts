/// <reference path="../types/dphelper.d.ts" />
export interface AiTool {
  tokenCount: (data: any) => number
  smartSanitize: (text: string) => string
  toon: (data: any) => string
  toonToJson: (toon: string) => any
  chunker: (text: string, options?: { size?: number, overlap?: number }) => string[]
  similarity: (a: number[], b: number[]) => number
  extractReasoning: (text: string) => { reasoning: string, content: string }
  prompt: (template: string, vars: Record<string, any>) => string
  schema: (data: any) => string
  snapshot: () => string
}

export const ai: AiTool
