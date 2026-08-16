/// <reference path="../types/dphelper.d.ts" />
export interface CompressTool {
  gzip: (data: string | Uint8Array) => Promise<Blob>
  gunzip: (blob: Blob) => Promise<string>
  deflate: (data: string | Uint8Array) => Promise<Blob>
  inflate: (blob: Blob) => Promise<string>
  compress: (data: string) => string
  decompress: (data: string) => string
  base64Encode: (data: string) => string
  base64Decode: (data: string) => string
  urlEncode: (data: string) => string
  urlDecode: (data: string) => string
  htmlEncode: (data: string) => string
  htmlDecode: (data: string) => string
}

export const compress: CompressTool
